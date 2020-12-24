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

  // 服务器
  server: {
    port: 1234
  },
  // 路由
  router: {
    extendRoutes (routes, resolve) {
      routes.splice(0)
      routes.push(...[
        {
          path: '*',
          name: 'Notfound',
          component: resolve(__dirname, 'pages/404')
        },
        {
          path: '/',
          name: 'Index',
          component: resolve(__dirname, 'pages/index')
        },
        {
          path: '/page1',
          name: 'Page1',
          component: resolve(__dirname, 'pages/page1')
        },
        {
          path: '/page2/:id',
          name: 'Page2',
          component: resolve(__dirname, 'pages/page2')
        },
        {
          path: '/page3',
          name: 'Page3',
          component: resolve(__dirname, 'pages/page3')
        },
        {
          path: '/page4',
          name: 'Page4',
          component: resolve(__dirname, 'pages/page4')
        }
      ])
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
  axios: {
    baseURL: 'https://api.nuxtjs.dev'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
