<template>
  <tab-bar class="bottom-bar">
    <tab-bar-item class="add">
      <div slot="tab-bar-text" @click="addGood">添加购物车</div>
    </tab-bar-item>
    <tab-bar-item class="buy" >
      <div slot="tab-bar-text" @click="buyGood">立即购买</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '../../common/TabBar/TabBar'
  import TabBarItem from '../../common/TabBar/TabBarItem'
  import cart from '@/store/modules/cart'
  export default {
    name: "DetailTabBar",
    components: {TabBar, TabBarItem},
    props: {
      sku: {
        type: String,
        default: 0
      }
    },
    computed: {
      getId(){
        return this.sku
      }
    },
    methods: {
      addGood(){
        // store 中添加商品
        console.log(this.getId)
        cart.commit('addGoods', {id: this.getId})
        console.log(cart.state.cartList)
      },
      buyGood(){
        // 路由到购买界面
        this.$router.push({path: '/buy', query: {id: this.getId}})
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    justify-content: flex-end;
    line-height: 44px;
    color: #ffffff;
    font-size: 18px;
  }
  .add, .buy {
    cursor: pointer;
  }
  .add{
    background: #ff9500;
  }
  .buy{
    background: #ff0036;
  }
</style>
