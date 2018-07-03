// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { initializeApp } from 'firebase'

// App things
import App from './App'
import router from './router'

// Local variables
import { store } from './store'
import { config } from './helpers/firebaseConfig'

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
  template: '<App/>',
  created () {
    initializeApp(config)
  }
})
