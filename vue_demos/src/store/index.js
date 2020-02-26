import Vue from 'vue'
import Vuex from 'vuex'
import {cart} from '@/store/modules'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart
  },
  state: {},
  mutations: {},
  actions: {},
  getters: getters
})
