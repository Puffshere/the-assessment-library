export default function ({ req, route, redirect, resolve }) {
    // Check if the request is from the government domain
    const host = req.headers.host;
  
    if (host === 'governmentassessments24x7.com' && route.path === '/') {
      // Serve the government page for this domain
      return redirect('/government-page');
    }
  
    // Optional: Add logic for other domains if needed
    if (host === 'assessments24x7.com' && route.path === '/government-page') {
      // Prevent government-page from being accessible on assessments24x7.com
      return redirect('/');
    }
  }
  