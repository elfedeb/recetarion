import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: true,
    user: null
  },
  mutations: {
    toggleMenu (state) {
      state.menu = (state.menu) ? false : true;
    },
    setMenu(state, menu) {
      state.menu = menu;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    }
  },
  actions: {

  }
})
