import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

// sensors components
import SensorsIndex from '@/components/Sensors/Index'

// stations components
import StationShow from '@/components/Stations/Show'

import SignIn from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    // senosrs routes
    { path: '/sensores', name: 'sensors', component: SensorsIndex },
    // stations routes
    { path: '/estacao/:estado/:cidade/:codigo', name: 'station', component: StationShow },
    // auth routes
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp }
  ]
})
