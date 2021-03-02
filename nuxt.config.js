export default {
  target: 'static',
  env: {
    qiita: 'https://qiita.com/shinbunbun_'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - しんぶんぶん',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'しんぶんぶん（高棟雄斗）のポートフォリオサイト' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'shinbunbun\'s portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://shinbunbun.info' },
      { hid: 'og:title', property: 'og:title', content: 'shinbunbun\'s portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'しんぶんぶんのポートフォリオ' },
      { hid: 'og:image', property: 'og:image', content: 'https://shinbunbun.info/images/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
      }
    ],
    script: [
      {

        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/main', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots',
    ['nuxt-canonical', { baseUrl: 'https://shinbunbun.info', trailingSlashes: false }]
  ],

  robots: {
    UserAgent: '*',
    // クローリングしないパスを記述
    Disallow: ['/extra', '/issuer.json', '/cert-verifier-js/*'],
    // sitemap.xmlのURLを記述
    Sitemap: 'https://shinbunbun.info/sitemap.xml'
  },

  googleAnalytics: {
    id: 'UA-93929869-11' // 自身のアナリティクスコード
  },

  gtm: {
    id: 'GTM-5QB974C'
  },

  /* webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  }, */

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
    port: 3333, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },

  router: {
    linkExactActiveClass: 'active',
    trailingSlash: true
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://shinbunbun.info',
    // generate: true,
    exclude: [
      '/extra'
    ]
  }
}
