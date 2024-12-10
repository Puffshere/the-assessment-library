export default function ({ req, route, redirect }) {
    const host = req.headers.host;
  
    // If on the government domain, ensure the government page is served at root
    if (host === 'governmentassessments24x7.com') {
      // Redirect /government-page to /
      if (route.path === '/government-page') {
        return redirect('/');
      }
    }
  
    // If on the assessments domain, ensure the default page is served at root
    if (host === 'assessments24x7.com') {
      // Redirect /government-page to /
      if (route.path === '/government-page') {
        return redirect('/');
      }
    }
  }
  