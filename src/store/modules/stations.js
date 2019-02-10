// import things here
import axios from 'axios'

const state = {
  cities: [],
  stationsByCity: [],
  sensors: [],
  error: false,
  errorMessage: null,
  loading: false
}

// getters
const getters = {}

// actions
const actions = {
  getCities ({commit, state}) {
    commit('setLoading', true)
    // request cities by CE uf
    var tmps = []
    let url = 'http://api.funceme.br/rest/pcd/estacao?limit=500&municipio.uf=CE'
    axios.get(url)
      .then(response => {
        let tmp = response.data.list
        for (var k in tmp) {
          tmps.push(tmp[k]['municipio']['nome'])
        }

        var objs = [...new Set(tmps)]
        commit('setCities', objs)
      })
      .catch(error => {
        console.log('error:', error.toString())
        commit('setError', true)
        commit('setErrorMessage', error.toString().split(':')[1])
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  getStationsByCity ({commit, state}, payload) {
    commit('setLoading', true)
    // request stations by city
    var objs = []
    let url = 'http://api.funceme.br/rest/pcd/estacao?limit=100&municipio.uf=CE&municipio.nome=' + payload.toString()
    console.log(url)
    axios.get(url)
      .then(response => {
        objs = response.data.list
        commit('setStationsByCity', objs)
      })
      .catch(error => {
        console.log('error:', error.toString())
        commit('setError', true)
        commit('setErrorMessae', error.toString().split(':')[1])
      })
      .finally(() => {
        commit('setLoading', false)
      })
  },
  getSensors ({commit, state}, payload) {
    commit('setLoading', true)
    // request list sensors
    var objs = []
    let url = 'http://api.funceme.br/rest/pcd/estacao?limit=100'
    axios.get(url)
      .then(response => {
        objs = response.data.list
        commit('setSensors', objs)
      })
      .catch(error => {
        console.log('error:', error.toString())
        commit('setError', true)
        commit('setErrorMessae', error.toString().split(':')[1])
      })
      .finally(() => {
        commit('setLoading', false)
      })
  }
}

// mutations
const mutations = {
  setCities (state, payload) {
    state.cities = payload
  },
  setStationsByCity (state, payload) {
    state.stationsByCity = payload
  },
  setSensors (state, payload) {
    state.sensors = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  setErrorMessage (state, payload) {
    state.errorMessage = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
