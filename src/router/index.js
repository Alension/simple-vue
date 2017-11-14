import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/index'
import home from '../pages/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/question',
      name: 'home',
      component: home
    }
  ]
})
