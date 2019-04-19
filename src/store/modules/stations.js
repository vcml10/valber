// import things here
import axios from 'axios'

const state = {
  cities: [],
  stationsByCity: [],
  stationsBySensor: [],
  stationByCode: {},
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
  getStationByCode ({commit, state}, payload) {
    commit('setLoading', true)
    // request station by code
    var obj = {}
    let url = 'http://api.funceme.br/rest/pcd/estacao?' +
      '&municipio.uf=' + payload.estado.toString() +
      '&municipio.nome=' + payload.cidade.toString() +
      '&codigo=' + payload.codigo.toString()
    axios.get(url)
      .then(response => {
        obj = response.data.list
        commit('setStationByCode', obj)
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
  getStationsBySensor ({commit, state}, payload) {
    commit('setLoading', true)
    // request stations by sensors
    console.log(payload)
    var objs = []
    var tmps = []
    let url = 'http://api.funceme.br/rest/pcd/estacao?limit=500&municipio.uf=CE'
    axios.get(url)
      .then(response => {
        let tmp = response.data.list
        console.log(response.data.list)

        for (var k in tmp) {
          if (tmp[k]['sensor'] === undefined) {
            continue
          } else if (tmp[k]['sensor'].length === 0) {
            continue
          } else {
            for (var j in tmp[k]['sensor']) {
              if (payload.includes(tmp[k]['sensor'][j]['codigo'])) {
                tmps.push(tmp[k])
                continue
              }
            }
          }
        }

        var objs = [...new Set(tmps)]
        commit('setStationsBySensor', objs)
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
  setStationByCode (state, payload) {
    state.stationByCode = payload
  },
  setStationsBySensor (state, payload) {
    state.stationsBySensor = payload
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
