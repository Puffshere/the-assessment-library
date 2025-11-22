module.exports = {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'The Assessment Library',
    meta: [
      { name: 'google-site-verification', content: 'v4C06rU0Io2gGicg0vVafnrpu4kcC98GFIalGto2Cwc' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#01A8FF' },
      { name: 'msapplication-navbutton-color', content: '#01A8FF' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { hid: 'description', name: 'description', content: 'A website for scenario-based, story-based assessments' }
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
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap'
      }
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
    //'~plugins/persisted-state.client.js',
    '~plugins/filters.js',
    '~plugins/region-select.js',
    '~plugins/file-agent.js',
    '~/plugins/auth-state.client.js',
    {
      src: '~plugins/webp-modernizr.js',
      ssr: false
    },
    '~/plugins/vue-moment.js',
    '~/plugins/lazy-hydration.js',
    {
      src: '~/plugins/vue-toast-notification.js',
      mode: 'client'
    },
    {
      src: '~/plugins/aos',
      ssr: false
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
    Sitemap: ''
  },
  sitemap: {
    hostname: 'https://www.theassessmentlibrary.com',
    gzip: true,
    exclude: [
      '/thank-you'
    ]
  },
  gtm: {
    id: 'GTM-NR3GL66',
    autoInit: true,
    pageTracking: true,
    scriptDefer: true
  },
  env: {
    // # Recaptcha key V2
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,

    // # Recaptcha key V3
    RECAPTCHA_SECRET_KEY_V3: process.env.RECAPTCHA_SECRET_KEY_V3,

    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  vue: {
    config: {
      devtools: true
    }
  },
  axios: {
    // Used by server-side (SSR, serverMiddleware)
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',

    // Used by code running in the browser
    browserBaseURL: process.env.BROWSER_API_BASE_URL || 'http://localhost:3000'
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
    transpile: ['@nuxtjs/axios', 'vee-validate/dist/rules', 'vue-lazy-hydration']
  },
  serverMiddleware: [
    '~/api/index.js'
  ],
  telemetry: false
}