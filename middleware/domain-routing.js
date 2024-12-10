export default function ({ req, app, route, redirect }) {
    const host = req.headers.host;
  
    if (host === 'governmentassessments24x7.com' && route.path === '/') {
      // Dynamically load the government page at root
      app.context.route.matched = [
        {
          components: {
            default: app.$nuxt.$options.components['pages/government-page'],
          },
        },
      ];
    }
  
    if (route.path === '/government-page') {
      // Redirect /government-page to / for both domains
      return redirect('assessments24x7.com/');
    }
  }
  