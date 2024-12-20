export default function (context) {
    const host = context.req.headers.host;
    
    if (host.includes('governmentassessments.com')) {
        return context.redirect('/government-page');
    }
}
