import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import cart from '@/views/cart/cart'
import category from '@/views/category/category'
import home from '@/views/home/home'
import profile from '@/views/profile/profile'
import Detail from '@/components/content/Detail/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage,
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
      }, {
        path: 'detail',
        name: 'detail',
        component: Detail
      }]

    }
  ]
})
