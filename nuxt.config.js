export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  server: {
    port: 1234,
    timing: false
  },

  router: {
    extendRoutes (routes, resolve) {
      routes = [
        {
          path: '*',
          name: '404',
          component: resolve(__dirname, 'pages/404.vue')
        },
        {
          path: '/',
          name: 'Index',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          path: '/page1',
          name: 'Page1',
          component: resolve(__dirname, 'pages/page1.vue')
        },
        {
          path: '/page2/:id',
          name: 'Page2',
          component: resolve(__dirname, 'pages/page2.vue')
        }
      ]
      routes.push(...routes)
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 重置全局样式
    '@/assets/css/reset.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

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
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
