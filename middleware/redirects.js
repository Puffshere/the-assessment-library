const redirects = require('../data/redirects.json');

export default function(context) {
    if (context.req) {
        if (context.req.url === '/training-forum') {
            context.redirect('https://training.assessments24x7.com');
        } else if (context.req.url === '/virtualtour.asp') {
            context.redirect('https://vault.assessments24x7.com/virtualtour.asp');
        } else if (context.req.url === '/webinar-archive.asp') {
            context.redirect('https://vault.assessments24x7.com/webinar-archive.asp');
        } else if (context.req.url.match(/(\/reports\/)[\w- ]+\.pdf/gi)) {
            context.redirect('https://www.assessments24x7.com/sample-reports');
        } else {
            const redirect = redirects.find(r => r.from === context.req.url);

            if (redirect) {
                context.res.writeHead(301, { Location: redirect.to });
                context.res.end();
            }
        }
    }
}
