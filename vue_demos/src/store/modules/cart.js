import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const user = new Vuex.Store({
  state: {
    cartList: []
  },
  //直接用于变更状态,同步方法
  mutations: {
    addGoods(goods){
      let item = state.cartList.filter(g => {g.id = goods.id})
      if(item){
        item.count ++
      }else{
        state.cartList.push(goods)
      }
    }
  },
  //不直接修改state，通过mutations间接修改state，支持异步
  actions: {
    addGoods(context, payload) {
      context.commit('addGoods', payload)
    }
  }
})

export default user
