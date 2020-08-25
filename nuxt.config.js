const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'DISC Assessments & Tools for Behavioral Profiling | Assessments 24x7',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Assessments 24x7 is a global leader in online DISC assessments and other behavioral profiling testing tools to organizations. Get a free quote today!' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "preconnect",
        href: "https://publishing.assessments24x7.com",
        crossorigin: true
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'plyr/dist/plyr.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/tag-manager.js',
      ssr: false
    },
    '~plugins/lazysizes.client.js',
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
      src: '~/plugins/vue-plyr',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/gtm'
  ],
  gtm: {
    id: 'GTM-NR3GL66',
    autoInit: true,
    dev: true,
    pageTracking: true,
    scriptDefer: true
  },
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.PUBLISHING_API_ENDPOINT || 'https://publishing.assessments24x7.com/index.php/wp-json/wp/v2'
  },

  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }

      config.node = {
        fs: 'empty'
      }
    },
    transpile: ['vue-mapbox', 'vue-plyr', '@nuxtjs/axios']
  },

  serverMiddleware: [
    '~/api/index.js'
  ],

  router: {
    middleware: 'redirects'
  }
}
