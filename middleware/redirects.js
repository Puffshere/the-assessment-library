const redirects = require('../data/redirects.json');

export default function(context) {
    if (context.req) {
        if (context.req.url === '/training-forum') {
            context.redirect('https://training.assessments24x7.com');
        } else if (context.req.url === '/virtualtour.asp') {
            context.redirect('https://vault.assessments24x7.com/virtualtour.asp');
        } else if (context.req.url === '/webinar-archive.asp') {
            context.redirect('https://vault.assessments24x7.com/webinar-archive.asp');
        } else if (context.req.url == '/reports/SampleTRScoringReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTRScoringReport.pdf');
        } else if (context.req.url == '/reports/SampleTRFullReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTRFullReport.pdf');
        } else if (context.req.url == '/reports/SampleDISCandMOT.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandMOT.pdf');
        } else if (context.req.url == '/reports/EIQSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf');
        } else if (context.req.url == '/reports/LearningStylesSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesSampleReport.pdf');
        } else if (context.req.url == '/reports/tsselfsample.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/tsselfsample.pdf');
        } else if (context.req.url == '/reports/valuessamplereport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/valuessamplereport.pdf');
        } else if (context.req.url == '/reports/DISCselfSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCselfSampleReport.pdf');
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
