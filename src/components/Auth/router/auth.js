// local routes

import SignIn from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'

const routes = [
  { path: '/signin', name: 'signin', component: SignIn },
  { path: '/signup', name: 'signup', component: SignUp }
]

export default {
  routes
}
