import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/Auth/SignUp'
import Login from '@/components/Auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
