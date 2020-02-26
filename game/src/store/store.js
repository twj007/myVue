import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const card = {
  id: 0, //随机的id
  img: '', //图片id
  open: true, //图片打开状态
}

export default new Vuex.Store({
  state: {
    step: 0, //点击步数
    operate: ["wait", "compare"], //操作状态 等待状态和比较状态
    status: "wait",
    cardList: [], //卡片列表
    clickedCard: null,
    finalList: [], //完成的卡片列表
  },
  mutations: {
    setStatus(state, status){
      state.status = status
    },
    // 设置卡片列表
    setCardList(state, list){
      list.forEach(v => {state.cardList.push(v)})
      console.log(state.cardList)
    },
    // 记录点击
    recordClick(state, id){
      // 点击项不为匹配卡片
      if(state.finalList.filter(c => {return c.id == id}).length == 0){
        //翻卡点击
        if(state.clickedCard === null){
          console.log('翻卡点击')
          state.step += 1
        }else if(state.clickedCard.id === id){
          console.log('点击同一张卡片')
        }else{
          console.log('翻卡点击 --- 匹配卡')
          state.step += 1
        }
      }
    },
    // 匹配卡片
    matchCard(state, id){
      let card = state.cardList.filter(c => { return c.id === id});
      state.cardList.forEach(v => {if(v.id == id){v.open = true}})
      // 1. 为点击的奇数
      if(state.clickedCard === null){
        console.log(state.finalList.filter(c => {return c.id == id}))
        if(state.finalList.filter(c => {return c.id == id}).length == 0){
          console.log('添加为点击卡片', card)
          state.clickedCard = card
        }else{
          console.log('已匹配卡片点击')
        }
      }else{
        if((state.clickedCard[0].id + id) === 17){
          console.log('匹配到卡片', state.clickedCard[0].id, card.id)
          // 匹配到了
          state.finalList.push(state.clickedCard)
          state.finalList.push(card)
          state.clickedCard = null
        }else{
          console.log('没有匹配到卡片')
          //没匹配到
          setTimeout(disable, 1000, state, id)

        }
      }
    }
  },
  actions: {
    openCard(context, id){
      context.commit('setStatus', 'running')
      // 1. 判断是否加步数
      context.commit('recordClick', id)
      // 2. 判断匹配卡片
      context.commit('matchCard', id)
    }
  },
  getters: {
    cardList: state => {return state.cardList},
    step: state => {return state.step},
    status: state => {return state.status},
    finalList: state => {return state.finalList},
    clickedCard: state => {return state.clickedCard}
  }
})


function disable(state, id){
  console.log(state)
  state.cardList.forEach(v => {if(v.id == id || v.id == state.clickedCard[0].id){v.open = false}})
  state.clickedCard = null
}
