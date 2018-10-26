const pages = {
  state:{
    title:'首页'
  },
  mutations: {
    SET_TITLE: (state, title) => {
      state.title = title
      console.log(state.title);
    }
  },
  actions: {
    Settitle({ commit }, title) {
      console.log('!~~~~'+title);
      commit('SET_TITLE',title)
    }
  }
}
export default pages
