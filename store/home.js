export default {
  namespaced: true,

  state: () => ({
    navList: [
      {
        label: '首页',
        path: '/'
      },
      {
        label: 'Item1',
        path: '/page1'
      },
      {
        label: 'Item2',
        path: '/page2/1'
      },
      {
        label: 'Item3',
        path: '/page3'
      },
      {
        label: 'Item4',
        path: '/page4'
      }
    ]
  }),

  getters: {
    navList: state => state.navList
  },

  actions: {},

  mutations: {}
}
