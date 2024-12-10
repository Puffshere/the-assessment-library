export default function ({ req, route, app, redirect, resolve }) {
    const host = req.headers.host;
  
    if (host === 'governmentassessments24x7.com' && route.path === '/') {
      // Dynamically serve government-page.vue for the root URL
      app.context.route.matched = [
        {
          components: {
            default: resolve('pages/government-page.vue')
          }
        }
      ];
    }
  }
  