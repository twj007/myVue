import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }

  ]
})
