import Vue from 'vue'
import Vuex from 'vuex'

// local modules
import base from './modules/base'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    base
  },

  state: {
    app_title: 'Vue.js Base Project',
    loading: false
  },

  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  actions: {}

})
