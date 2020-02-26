import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '@/components/MainMenu'
import panel from '@/components/content/panel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/panel',
      name: 'panel',
      component: panel
    }
  ]
})
