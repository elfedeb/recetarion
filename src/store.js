import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: true
  },
  mutations: {
    toggleMenu (state) {
      state.menu = (state.menu) ? false : true;
    }
  },
  actions: {

  }
})
