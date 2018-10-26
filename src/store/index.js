import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import pages from './modules/pages'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,pages
  },
})

export default store
