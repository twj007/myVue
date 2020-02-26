import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const user = new Vuex.Store({
  state: {
    count: 1,
    todos: [
      {id: 1, text: 'aaa', done: true},
      {id: 2, text: 'bbb', done: false},
      {id: 3, text: 'ccc', done: true}
    ]
  },
  //直接用于变更状态,同步方法
  mutations: {
    increment(state){
      state.count ++
    },
    changeDone(state, payload){
      let t = state.todos.filter(todo => {
        return todo.id == payload
      })
      t[0].done = !t[0].done
    }
  },
  //不直接修改state，通过mutations间接修改state，支持异步
  actions: {
    increment(context){
      context.commit('increment')
    },
    changeDone(context, payload){
      context.commit('changeDone', payload)
    }
  },
  getters: {
    getTodos: state => {
      state.todos.filter(todo => {todo.done})
    }
  }
})

export default user
