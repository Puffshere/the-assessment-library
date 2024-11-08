const Koa = require('koa');
const cors = require('@koa/cors'); // You already have this installed
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const app = new Koa();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

// Set up CORS to allow requests from bs-local.com
// Set up CORS middleware before any other routes or middleware
app.use(cors({
  origin: (ctx) => {
    if (ctx.request.header.origin && ctx.request.header.origin.includes('bs-local.com')) {
      return '*'; // Allow requests from bs-local.com
    }
    return false; // Disallow all other origins by default
  },
  credentials: true,
}));


async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '0.0.0.0', // Bind to all network interfaces
    port = process.env.PORT || 3000,
  } = nuxt.options.server;

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use((ctx) => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();
