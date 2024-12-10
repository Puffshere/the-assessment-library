export default function ({ req, route, redirect }) {
    const host = req.headers.host;
  
    // Serve government-page.vue at `/` for governmentassessments24x7.com
    if (host === 'governmentassessments24x7.com' && route.path === '/') {
      return; // Let Nuxt render the root page, which will be dynamically set in the routes
    }
  
    // Redirect /government-page to / for governmentassessments24x7.com
    if (host === 'governmentassessments24x7.com' && route.path === '/government-page') {
      return redirect('/');
    }
  
    // Prevent access to /government-page on assessments24x7.com
    if (host === 'assessments24x7.com' && route.path === '/government-page') {
      return redirect('/');
    }
  }
  