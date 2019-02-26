module.exports = {
  server: {
    host: '0.0.0.0', // default: localhost
    port: 2336 // default: 3000
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Warm little family',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: [
      'auth'
    ]
  },
  plugins: [
    { src: '~plugins/iview', ssr: true },
    { src: '~/plugins/vue-swiper.js', ssr: false }
  ],
  css: [
    { src: '~/assets/style/app.scss' },
    { src: 'swiper/dist/css/swiper.css' }
  ],

  proxy: {
    '/app/*': {
      target: 'http://xxx:8888',
      secure: false
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
