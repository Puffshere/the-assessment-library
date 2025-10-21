const pkg = require('./package');
const axios = require('axios');

module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'DISC Assessments for Government | Assessments 24x7',
    meta: [
      { name: 'google-site-verification', content: 'v4C06rU0Io2gGicg0vVafnrpu4kcC98GFIalGto2Cwc' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#01A8FF' },
      { name: 'msapplication-navbutton-color', content: '#01A8FF' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { hid: 'description', name: 'description', content: 'Boost team collaboration and leadership with DISC Assessments tailored for government agencies. Explore solutions to enhance performance and communication.' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'manifest',
        type: 'image/x-icon',
        href: '/manifest.json'
      },
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true, defer: true }
    ]
  },
  loading: { color: '#fff' },
  plugins: [
    {
      src: '~plugins/tag-manager.js',
      ssr: false
    },
    '~plugins/lazysizes.client.js',
    '~plugins/persisted-state.client.js',
    '~plugins/filters.js',
    '~plugins/region-select.js',
    '~plugins/file-agent.js',
    {
      src: '~plugins/webp-modernizr.js',
      ssr: false
    },
    '~/plugins/vue-moment.js',
    {
      src: '~plugins/mapbox.js',
      mode: 'client'
    },
    {
      src: '~/plugins/lazy-hydration.js', ssr: false
    },
    {
      src: '~/plugins/vue-toast-notification.js',
      mode: 'client'
    },
    {
      src: '~/plugins/aos',
      ssr: false
    },
    {
      src: '~/plugins/calendly.js',
      mode: 'client'
    },
    '~/plugins/zapier.js',
    {
      src: '~/plugins/google-maps.js',
      mode: 'client'
    }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  robots: {
    UserAgent: '*',
    Disallow: [
      '/_nuxt/',
      '/.well-known/'
    ],
    Sitemap: 'https://www.governmentassessments24x7.com/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://www.governmentassessments24x7.com',
    gzip: true,
    exclude: [
      '/thank-you',
      '/government-page'
    ]
  },
  gtm: {
    id: 'GTM-NR3GL66',
    autoInit: true,
    pageTracking: true,
    scriptDefer: true
  },
  vue: {
    config: {
      devtools: true
    }
  },
  devServer: {
    disableHostCheck: true
  },
  build: {
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }

      config.node = {
        fs: 'empty'
      }
    },
    transpile: ['vue-mapbox', '@nuxtjs/axios', 'vee-validate/dist/rules'],
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  serverMiddleware: [
    '~/api/index.js'
  ],
  router: {
    middleware: 'redirects'
  },
  telemetry: false
}