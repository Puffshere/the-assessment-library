const Koa = require('koa');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const app = new Koa();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Middleware to serve different manifest.json based on hostname
  app.use(async (ctx, next) => {
    if (ctx.path === '/manifest.json') {
      if (ctx.hostname.includes('governmentassessments.com')) {
        ctx.type = 'application/json';
        ctx.body = require('../static/manifest-government.json');
      } else {
        ctx.type = 'application/json';
        ctx.body = require('../static/manifest-assessments.json');
      }
    } else {
      await next();
    }
  });

  // Middleware to handle hostname-specific page routing
  app.use(async (ctx, next) => {
    if (ctx.hostname.includes('governmentassessments.com')) {
      ctx.req.url = '/government-page'; // Modify URL to serve government page
    }
    await next();
  });

  // Nuxt rendering middleware
  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // Useful in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
