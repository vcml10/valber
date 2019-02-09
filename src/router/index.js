import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

// sensors components
import SensorsIndex from '@/components/Sensors/Index'

import SignIn from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: Index },
    // senosrs routes
    { path: '/sensores', name: 'sensors', component: SensorsIndex },
    // auth routes
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp }
  ]
})
