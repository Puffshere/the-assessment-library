const pkg = require('./package');
const axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'DISC Assessments for Government | Assessments 24x7',
    meta: [
      // unused javascript
      // { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'v4C06rU0Io2gGicg0vVafnrpu4kcC98GFIalGto2Cwc' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#01A8FF' },
      { name: 'msapplication-navbutton-color', content: '#01A8FF' },
      // unused javascript
      // { name: 'apple-mobile-web-app-capable', content: 'yes' },
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
        href: '/static/manifest.json'
      },
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true, defer: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Plugins to load before mounting the App
  */
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

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
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
    Sitemap: 'https://www.governmentassessments.com/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://www.governmentassessments.com',
    gzip: true,
    // routes: async () => {
    //   const { data } = await axios.get('https://a24x7-publishing.herokuapp.com/ghost/api/v3/content/posts/?key=1cd8f26ccc1cb09274574d0e00&limit=all&fields=slug');
    //   return data.posts.map(post => `/blog/${post.slug}`);
    // },
    exclude: [
      '/disccert-account-setup',
      '/account-setup',
      '/account-setup-thank-you',
      '/thank-you',
      '/get-started',
      '/get-started-thankyou',
      '/resources/trainer-materials',
      '/resources/trainer-materials/**',
      '/badge',
      '/disc-workshop-leader-badge',
      '/eiq-badge',
      '/motivators-badge',
      '/pgi-badge',
      '/platinum-rule-badge',
      '/platinum-rule-eworkbook-thankyou',
      '/trends-thankyou',
      '/forms',
      '/hs-badge',
      '/hvp-badge',
      '/learning-styles-badge',
      '/logos',
      '/login',
      '/resources/lock/**',
      '/cardone-communication-coach',
      '/store/purchase-confirmation',
      '/store/collections/products',
      '/store',
      '/resources/hiresense-training-library',
      '/angie',
      '/angie-w',
      '/jennifer',
      '/monica',
      '/suzette',
      '/cathy',
      '/cristina',
      '/tools/email-dev',
      '/tools/email-original',
      '/resources/standards-and-procedures',
      '/hiresense-calc',
      '/blog/**',
      '/about/what-is-disc-dev',
      '/corporate-dev',
      '/government-page'
    ]
  },
  gtm: {
    id: 'GTM-NR3GL66',
    autoInit: true,
    pageTracking: true,
    scriptDefer: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.PUBLISHING_API_ENDPOINT || 'https://a24x7-publishing.herokuapp.com/ghost/api/v3/content/'
  },
  env: {
    NUXT_ENV_GOOGLE_MAPS_SECRET_KEY: process.env.NUXT_ENV_GOOGLE_MAPS_SECRET_KEY
  },

  // This code is to explicitly allow Vue.js DevTools
  vue: {
    config: {
      devtools: true
    }
  },


  devServer: {
    disableHostCheck: true
  },


  /*
  ** Build configuration
  */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
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