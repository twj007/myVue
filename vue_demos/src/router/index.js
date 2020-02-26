import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import cart from '@/views/cart/cart'
import category from '@/views/category/category'
import home from '@/views/home/home'
import profile from '@/views/profile/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [{
        path: 'home',
        name: 'home',
        component: home
      }, {
        path: 'profile',
        name: 'profile',
        component: profile
      }, {
        path: 'category',
        name: 'category',
        component: category
      }, {
        path: 'cart',
        name: 'cart',
        component: cart
      }]

    }
  ]
})
