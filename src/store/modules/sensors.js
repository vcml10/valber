// import things here
import axios from 'axios'

const state = {
  sensors: [],
  error: false,
  errorMessage: null,
  loading: false
}

// getters
const getters = {}

// actions
const actions = {
  getSensors ({commit, state}) {
    commit('setLoading', true)
    // request list sensors
    var objs = []
    let url = 'http://api.funceme.br/rest/pcd/sensor?limit=100'
    console.log('getting url:', url)
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
  },
  getDataSensor ({commit, state}, payload) {
    commit('setLoading', true)
    // request data sensor
    var objs = []
    let url = 'http://api.funceme.br/rest/pcd/dado-sensor?' +
      'data=' + payload.data.toString() +
      '&estacao.codigo=' + payload.estacao.codigo.toString() +
      '&sensor.codigo=' + payload.sensor.codigo.toString() +
      '&orderBy=data,DESC'
    console.log(objs)
    console.log(url)
  }
}

// mutations
const mutations = {
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
