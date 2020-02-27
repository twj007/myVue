import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart
  },
  getters: getters
})
