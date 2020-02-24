// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import {getCookie} from '@/common/common'

Vue.config.productionTip = false

router.beforeEach((from, to, next) => {
  console.log(from)
  let cookie = getCookie("zzz")
  console.log(cookie)
  if(cookie === '' && from.path == "/home"){
    next('/cart')
  }else{
    next()
  }
})
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
