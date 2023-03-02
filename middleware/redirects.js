const redirects = require('../data/redirects.json');

export default function(context) {
    if (context.req) {
        if (context.req.url === '/training-forum') {
            context.redirect('https://training.assessments24x7.com');
        } 
        
        else if (context.req.url === '/webinar-archive.asp') {
            context.redirect('https://vault.assessments24x7.com/webinar-archive.asp');
        } 
        
        else if (context.req.url == '/reports/SampleTRScoringReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTRScoringReport.pdf');
        } 
        
        else if (context.req.url == '/reports/SampleTRFullReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTRFullReport.pdf');
        } 
        
        else if (context.req.url == '/reports/SampleDISCandMOT.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOT.pdf');
        } 

        else if (context.req.url == '/reports/EIQSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf');
        } 

        else if (context.req.url == '/reports/EIQ360SampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360SampleReport.pdf');
        } 

        else if (context.req.url == '/reports/DISCandEIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandEIQ.pdf');
        } 

        else if (context.req.url == '/reports/DISCLeadandEIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCLeadandEIQ.pdf');
        } 

        else if (context.req.url == '/reports/DISCSalesandEIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSalesandEIQ.pdf');
        } 
        
        else if (context.req.url == '/reports/LearningStylesSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesSampleReport.pdf');
        } 

        else if (context.req.url == '/reports/SampleDISCandLS.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandLS.pdf');
        } 

        else if (context.req.url == '/reports/SampleDISCSalesandLS.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCSalesandLS.pdf');
        } 

        else if (context.req.url == '/reports/SampleDISCLeadandLS.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCLeadandLS.pdf');
        } 

        else if (context.req.url == '/reports/SalesIQPlus.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlus.pdf');
        } 

        else if (context.req.url == '/reports/salesiqteamreport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreport.pdf');
        } 

        else if (context.req.url == '/reports/motgroupgraphs.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motgroupgraphs.pdf');
        } 

        else if (context.req.url == '/reports/motteamwheel.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motteamwheel.pdf');
        } 

        else if (context.req.url == '/reports/DISC360SampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360SampleReport.pdf');
        }

        else if (context.req.url == '/reports/SampleLE360.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleLE360.pdf');
        } 
        
        else if (context.req.url == '/reports/tsselfsample.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/tsselfsample.pdf');
        } 
        
        else if (context.req.url == '/reports/valuessamplereport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/valuessamplereport.pdf');
        } 
        
        else if (context.req.url == '/reports/DISCselfSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf');
        }

        else if (context.req.url == '/reports/SalesDISCselfSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesDISCselfSampleReport.pdf');
        }

        else if (context.req.url == '/reports/DISCCoaching.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCCoaching.pdf');
        } 

        else if (context.req.url == '/reports/DISCService.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCService.pdf');
        } 
        
        else if (context.req.url == '/reports/DISCLeadershipSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCLeadershipSampleReport.pdf');
        } 
        
        else if (context.req.url == '/clientrequests') {
            context.redirect('https://form.asana.com/?k=8wVHOZo8OayfLFz9UhjCbA&d=460673300006490');
        }

        else if (context.req.url == '/360_Instructions_2020.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/360Instructions2022.pdf');
        }

        else if (context.req.url == '/hiring-and-selection') {
            context.redirect('https://hiresense.com');
        }

        else if (context.req.url == '/hiring-and-selection/') {
            context.statusCode = 301;
            context.redirect('https://www.assessments24x7.com');
        }

        else if (context.req.url == '/store') {
            context.redirect('https://store.assessments24x7.com');
        }

        else if (context.req.url == '/store/group-certification') {
            context.statusCode = 301;
            context.redirect('https://www.assessments24x7.com/certifications');
        }

        else if (context.req.url == '/hiring-and-selection-assessments.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (context.req.url == '/executive-summary-series.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (context.req.url == '/workplace-strengths.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (context.req.url == '/disc-fitness-benchmarking.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (context.req.url == '/resources/Five-Sample-EIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Five-Sample-EIQ.PDF');
        }
        
        else if (context.req.url.match(/(\/reports\/)[\w- ]+\.pdf/gi)) {
            context.redirect('https://www.assessments24x7.com/sample-reports');
        }

        else if (context.req.url == '/disc-card-retail') {
            context.redirect('https://assessments247.net/EndUserAdmin/RegisterChoice.aspx?oY%5d%5bkT');
        }

        else if (context.req.url == '/rick-barrera.asp') {
            context.statusCode = 301;
            context.redirect('https://www.assessments24x7.com');
        }

        else if (context.req.url == '/continuing-education.asp') {
            context.statusCode = 301;
            context.redirect('https://www.assessments24x7.com/certifications');
        }

        else if (context.req.url == '/annual-users-conference-2016.asp') {
            context.statusCode = 301;
            context.redirect('https://www.assessments24x7.com');
        }

        else if (context.req.url == '/the-platinum-rule.asp') {
            context.statusCode = 301;
            context.res.setHeader('Location', 'https://www.assessments24x7.com/assessments');
        }

        else {
            const redirect = redirects.find(r => r.from === context.req.url);

            if (redirect) {
                context.res.writeHead(301, { Location: redirect.to });
                context.res.end();
            }
        }
    }
}
