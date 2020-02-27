import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'vue-ls'

const cart_options = {
  namespace: 'cart_', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local', // 存储名称: session, local, memory
}
Vue.use(Storage, cart_options)
Vue.use(Vuex)

/***
 * 保存的商品信息应该为：
 * goods: {
 *   sku: '',
 *   name: '',
 *   unit: '', 规格
 *   price: '',
 *   num: 0,
 *   imgUrl: '',
 *   shop: '',   购买店铺
 *   shopLink: '', 店铺路径
 *   shopLevel: '' 店铺级别
 * }
 * @type {Store}
 */
const cart = new Vuex.Store({
  state: {
    cartList: []
  },
  //直接用于变更状态,同步方法
  mutations: {
    addGoods(state, goods){
      // 查详情数据
      const item = state.cartList.filter(g => {g.id = goods.id})
      if(item.length != 0){
        item.count += goods.count
      }else{
        state.cartList.push(goods)
      }
      Vue.ls.set("goods", state.cartList)
    }
  },
  //不直接修改state，通过mutations间接修改state，支持异步
  actions: {
    addGoods(context, payload) {
      context.commit('addGoods', payload)
    }
  },
  getters: {
    cartList: state => state.cart.cartList
  }
})

export default cart
