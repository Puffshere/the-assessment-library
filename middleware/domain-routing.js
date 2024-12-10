export default function ({ req, redirect, route }) {
    const host = req.headers.host;
  
    if (host === 'governmentassessments24x7.com' && route.path === '/') {
      // Dynamically render the government page for this domain
      return { name: 'government-page' }; // Match the name of your government-page route
    }
  
    if (host === 'assessments24x7.com' && route.name === 'government-page') {
      // Prevent government-page from being accessible on assessments24x7.com
      return { name: 'index' }; // Match the name of your root route (index)
    }
  
    // Default: Do nothing, let Nuxt handle routing normally
  }
  