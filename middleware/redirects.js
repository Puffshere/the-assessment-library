const redirects = require('../data/redirects.json');

export default function (context) {
    if (context.req) {
        const url = encodeURI(context.req.url);

        if (url === '/training-forum') {
            context.redirect('https://training.assessments24x7.com');
        }

        else if (url === '/webinar-archive.asp') {
            context.redirect('https://vault.assessments24x7.com/webinar-archive.asp');
        }

        else if (url == '/reports/SampleTRScoringReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTRScoringReport.pdf');
        }

        else if (url == '/reports/SampleTRFullReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleTRFullReport.pdf');
        }

        else if (url == '/reports/SampleDISCandMOT.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_and_Motivators.pdf');
        }

        else if (url == '/reports/EIQSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf');
        }

        else if (url == '/reports/EIQ360SampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQ360SampleReport.pdf');
        }

        else if (url == '/reports/DISCandEIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCandEIQ.pdf');
        }

        else if (url == '/reports/DISCLeadandEIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCLeadandEIQ.pdf');
        }

        else if (url == '/reports/DISCSalesandEIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSalesandEIQ.pdf');
        }

        else if (url == '/reports/LearningStylesSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/LearningStylesSampleReport.pdf');
        }

        else if (url == '/reports/SampleDISCandLS.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCandLS.pdf');
        }

        else if (url == '/reports/SampleDISCSalesandLS.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCSalesandLS.pdf');
        }

        else if (url == '/reports/SampleDISCLeadandLS.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCLeadandLS.pdf');
        }

        else if (url == '/reports/SalesIQPlus.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesIQPlus.pdf');
        }

        else if (url == '/reports/salesiqteamreport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/salesiqteamreport.pdf');
        }

        else if (url == '/reports/motgroupgraphs.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motgroupgraphs.pdf');
        }

        else if (url == '/reports/motteamwheel.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/motteamwheel.pdf');
        }

        else if (url == '/reports/DISC360SampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISC360SampleReport.pdf');
        }

        else if (url == '/reports/SampleLE360.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleLE360.pdf');
        }

        else if (url == '/reports/tsselfsample.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/tsselfsample.pdf');
        }

        else if (url == '/reports/valuessamplereport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Motivators.pdf');
        }

        else if (url == '/reports/DISCselfSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf');
        }

        else if (url == '/reports/SalesDISCselfSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SalesDISCselfSampleReport.pdf');
        }

        else if (url == '/reports/DISCCoaching.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCCoaching.pdf');
        }

        else if (url == '/reports/DISCService.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCService.pdf');
        }

        else if (url == '/reports/DISCLeadershipSampleReport.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCLeadershipSampleReport.pdf');
        }

        else if (url == '/clientrequests') {
            context.redirect('https://form.asana.com/?k=8wVHOZo8OayfLFz9UhjCbA&d=460673300006490');
        }

        else if (url == '/360_Instructions_2020.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/360Instructions2022.pdf');
        }

        else if (url == '/hiring-and-selection') {
            context.redirect('https://hiresense.com');
        }

        // else if (url == '/store') {
        //     context.redirect('https://store.assessments24x7.com');
        // }

        else if (url == '/hiring-and-selection-assessments.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (url == '/executive-summary-series.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (url == '/workplace-strengths.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (url == '/disc-fitness-benchmarking.asp') {
            context.redirect('https://hiresense.com');
        }

        else if (url == '/partner-sample-reports/TrueColorsSample.pdf/1000') {
            context.redirect('https://www.assessments24x7.com/partner-sample-reports/TrueColorsSample.pdf');
        }

        else if (url == encodeURI('/pdfs/Dealing With Conflict Sampl')) {
            context.redirect('https://www.assessments24x7.com/pdfs/Dealing+20With+20Conflict+20Sample+20Report.pdf');
        }

        else if (url == encodeURI('/pdfs/Dealing With Conflict Sample')) {
            context.redirect('https://www.assessments24x7.com/pdfs/Dealing+20With+20Conflict+20Sample+20Report.pdf');
        }

        else if (url == encodeURI('/validity/Values Validity-Research.pdf')) {
            context.redirect('https://www.assessments24x7.com/about/validity');
        }

        else if (url == '/resources/Five-Sample-EIQ.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Five-Sample-EIQ.PDF');
        }

        else if (url == '/webinars/DISC+Debrief+Coaching+Worksheet-+Assessments+24x7+report_Final.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/DISC+Debrief+Coaching+Worksheet-+Assessments+24x7+report_Final.pdf');
        }

        else if (url == '/webinars/A24x7+DISCcert+Webinar+.pdf') {
            context.redirect('https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7+DISCcert+Webinar+.pdf');
        }

        else if (url.match(/(\/reports\/)[\w- ]+\.pdf/gi)) {
            context.redirect('https://www.assessments24x7.com/sample-reports');
        }

        else {
            const redirect = redirects.find(r => r.from === url);

            if (redirect) {
                context.res.writeHead(301, { Location: redirect.to });
                context.res.end();
            }
        }
    }
}
