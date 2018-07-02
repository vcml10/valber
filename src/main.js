// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Vuex things
import { store } from './store'

// Bulma and Buefy - Theme
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
Vue.use(Buefy)

// Local styles and colors
require('./assets/sass/app.scss')
require('./assets/css/index.css')
require('./assets/css/login.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
