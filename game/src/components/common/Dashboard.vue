<template>
    <div class="dashboard">
      <cart :style="{height: height + 'px'}" class="card" v-for="cart, index in carts" :key="index">
        <img :class="{turn0: cart.open}" class="back" v-if="cart.open" slot="card" :src="cart.img">
        <img :class="{trun180: !cart.open}" class="front" v-else slot="card" src="../../assets/logo.png" @click="openCard(cart.id)">
      </cart>
      <div class="footer"> 状态： {{status}}</div>
      <div>
        <p>匹配列表</p>
        <span>{{finalList}}</span>
      </div>
    </div>
</template>

<script>
  import cart from '@/components/common/cart'
  import {shuffle} from '@/common.js'
  import store from '@/store/store'
  export default {
    name: "Dashboard",
    components: {cart},
    computed: {
      step(){
        return store.getters.step
      },
      carts(){
        return store.getters.cardList
      },
      status(){
        return store.getters.status
      },
      finalList(){
        return store.getters.finalList
      }
    },
    data(){
      return {
        imgIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        height: ''
      }
    },
    created(){
      const carts = new Array();
      const index = shuffle(this.imgIndex, 16);
      console.log(index)
      this.height = (window.outerHeight - 150) / 4;
      for(let i = 0; i < index.length; i ++){
          carts[i] = {
          id: index[i],
          img: '../../assets/card/' + index[i] + '.png',
          open: false
        }
      }
      console.log(carts)
      store.commit('setCardList', carts)
    },
    methods: {
      openCard(id){
        console.log('打开卡片')
        store.dispatch('openCard', id)
        if(this.finalList.length == 16){
          store.commit('setStatus', 'wait')
          alert("success")
        }
      }
    }
  }
</script>

<style scoped>
.dashboard {
  position:  absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin: 0;
  padding: 0;
}
  .card{
    display: inline-block;
    width: 20%;
    background: #eee;
    margin: 5px;
    border: 5px;
  }
  .card img{
    width: 100%;
    height: 100%;
  }
  .footer{
    line-height: 44px;
  }
  .front, .back{
    -webkit-backface-visibility: hidden;
    transition: -webkit-transform 800ms
  }
  .turn0 {
    -webkit-transform: translateZ(0) rotateY(180deg)
  }
  .turn180 {
    -webkit-transform: translateZ(0) rotateY(-180deg)
  }
</style>
