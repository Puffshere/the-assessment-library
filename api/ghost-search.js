// begin config
const ghost_host = 'https://a24x7-publishing.herokuapp.com'; //your blogs domain -- see documentation of tryghost/content-api
const ghost_key = '1cd8f26ccc1cb09274574d0e00'; //key to your integration -- see documentation of tryghost/content-api
const updateInterval = 60000; //how often the index should update given in milliseconds
const requestTimeout = 5000; // maximum time for a search request before it times out given in milliseconds (note this isn't exact, it depends on the load of the event loop)
const resultsPerPage = [8]; // allowed values for limit. in my case we only allow 8, but made this configurable so users of ghost can benefit

// end config

const elasticlunr = require('elasticlunr');

var index = elasticlunr(function () {
    this.addField('title');
    this.addField('meta_title');
    this.addField('plaintext');
    this.addField('meta_description');
    this.addField('excerpt');
    this.addField('custom_excerpt');
    this.setRef('id');
});

const GhostContentAPI = require('@tryghost/content-api');

const blog = new GhostContentAPI({
    url: ghost_host,
    key: ghost_key,
    version: 'v3'
});

var inprogress = 0,
    indexWillUpdate = false,
    indexReady = false

function updateIndex() {
    return new Promise(updateIndex_impl);//kicks of the update by creating a promise and calling the internal updateIndex_impl
}

// this function accepts the resolve/reject from the promise and implements the logic for waiting until it can update the index, then doing so 
// don't have to worry about uncaught promise errors, we just keep recursing
function updateIndex_impl(resolve,reject) {
    if(inprogress > 0) {
        setTimeout(()=>updateIndex_impl(resolve,reject),22);//just keep passing the original arguments
    }else{
        indexWillUpdate = true;
        console.log('updating index');
        return blog.posts.browse({limit:'all',formats:'html,plaintext'}).then(posts=>{
            console.log('got posts from blog');
            posts.forEach(post=>index.addDoc(post));//If docRef already exist, then update doc. <--taken straight from elasticlunr docs
            indexWillUpdate=false;
            indexReady = true;
            console.log('index updated');
            resolve();
        })
        .catch(err=>{
            console.log('failed to update index');
            console.log('debug info: indexWillUpdate=%s,indexReady=%s',indexWillUpdate?'true':'false',indexReady?'true':'false');
            console.log(err);
            return updateIndex_impl(resolve,reject);
        })
    }
}

function waitForIndex(timeout) {
    return new Promise((resolve,reject)=>{
        if(indexWillUpdate || !indexReady){
            var elapsed = 0;
            var _t = setInterval(()=>{
                elapsed += 66;
                if(!indexWillUpdate && indexReady){
                    clearInterval(_t);
                    resolve();
                }else{
                    if(elapsed > timeout){
                        clearInterval(_t);
                        reject(new Error('timeout exceeded while waiting for index'));
                    }  
                }
                
            },66);
        }else{
            resolve();
        }
    })
}

function search(req,res) {

    const term = req.query.term || false;
    const limit = req.query.limit ? ~~(req.query.limit) : resultsPerPage[0];
    const page = (req.query.page ? ~~(req.query.page) : 1) - 1;

    if(!term){
        return res.status(400).json({posts:null,message:'missing required parameter `term`'});
    }

    if(resultsPerPage.indexOf(limit) === -1){
        return res.status(400).json({posts:null,message:'supplied value for parameter `limit` is invalid'});
    }

    if(page < 0){
        return res.status(400).json({posts:null,message:'supplied value for parameter `page` is invalid'});
    }

    var didIncr = false;//did not incr, so in case of error we only want to decrease counter of inprogress if didIncr = true

    waitForIndex(requestTimeout).then(()=>{
        inprogress +=1;
        didIncr = true;//if we error after this, we have to decrease the counter
        var startIndex = page * limit;
        var endIndex = (page + 1) * limit;

        var _posts = index.search(term,{
            fields: {
                title: { boost: 2, bool: 'AND' },
                plaintext: { boost: 1, bool: 'AND' }
            },
            bool:'OR',
            expand: true
        });
        var posts = _posts.map(item=>index.documentStore.getDoc(item.ref)).slice(startIndex,endIndex);
        res.status(200).json({ posts,meta:{
            pagination:{
                page:page+1,
                limit,
                pages: Math.ceil(_posts.length/limit),
                total: _posts.length,
            }
        } });
        inprogress -= 1;
    })
    .catch(err=>{
        console.log(err);
        if(didIncr){
            inprogress -=1;
        }
        res.status(500).json({posts:null,message:'500 internal server error'});
    });
}

//kick it off
function routine(){
    updateIndex().then(()=>setTimeout(routine,updateInterval)).catch(err=>{
        console.log(err);
    })
}

//export a function to start the Search Index
const start = ()=>routine();

// archive (gets posts by month like 01-2019
function getFirstAndLastDay(month,year) {
    var d = new Date();
    d.setFullYear(year);
    d.setMonth(month-1);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
    d.setHours(0);
    var firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    firstDay.setDate(firstDay.getDate());//ghost filter is exclusive, so we need to go back 1 day to capture first day of month
    var lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    lastDay.setDate(lastDay.getDate());//same principal here as with firstDay
    return {firstDay,lastDay};
}

function checkZero( n ) {
    return n < 10 ? ('0'+n) : n;
}

function dateFormat( d ) {
    return d.getFullYear()+'-'+checkZero(d.getMonth()+1)+'-'+checkZero(d.getDate());
}

function archive(req,res) {
    
    const _month = req.query.month || false;
    const page = (req.query.page ? ~~(req.query.page) : 1) - 1;

    if(!_month){
        return res.status(400).json({posts:null,message:'missing required parameter `month`'});
    }

    if(page < 0){
        return res.status(400).json({posts:null,message:'supplied value for parameter `page` is invalid'});
    }

    if(!/^\d{2}\-\d{4}$/.test(_month)){
        return res.status(400).json({posts:null,message:'supplied value for parameter `month`'});
    }
    
    const [month,year] = _month.split('-').map(v=>~~v);
    const {firstDay,lastDay} = getFirstAndLastDay(month,year);

    blog.posts.browse({ limit: 4, page,filter:`published_at:<='${dateFormat(lastDay)}' + published_at:>='${dateFormat(firstDay)}'`}).then(results=>{
        console.log(results);
        res.status(200).json({posts:results,meta:results.meta});
    })

}

module.exports = {search,archive,start};