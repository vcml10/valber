import Vue from 'vue'
import Vuex from 'vuex'
import { database } from 'firebase'

// local modules
import base from './modules/base'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    base
  },

  state: {
    app_title: 'Vue.js Base Project',
    app_subtitle: 'Simple...',
    loading: false
  },

  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  actions: {
    setAppConfiguration ({commit, state}, payload) {
      database().ref('app-configurations')
        .update({
          title: state.app_title,
          subtitle: state.app_subtitle
        })
    }
  }

})
