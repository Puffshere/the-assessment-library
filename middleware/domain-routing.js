export default function ({ req, route, redirect }) {
    const host = req.headers.host;
  
    // Serve government-page.vue at `/` for governmentassessments24x7.com
    if (host === 'governmentassessments24x7.com' && route.path === '/') {
      // Do nothing; allow Nuxt to render `government-page.vue` dynamically
      return;
    }
  
    // Prevent access to `/government-page` on both domains
    if (route.path === '/government-page') {
      return redirect('/');
    }
  }
  