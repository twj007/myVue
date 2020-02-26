<template>
  <div>
    home
    {{model}}
    {{err}}
    vuex:
    状态管理：
    <button @click="increment">增加</button>
    counter: {{count}}

    <ul v-for="todo in todos">
      <li @click="undo(todo.id)">{{todo.id}}</li>
      <li @click="undo(todo.id)">{{todo.text}}</li>
      <li @click="undo(todo.id)">{{todo.done}}</li>
    </ul>
  </div>
</template>

<script>
  import {requestPromise} from '@/network/request'
  import {data} from '@/common/mixins'
  import {mapState} from 'vuex'
  import user from '@/store/store'
  export default {
    name: "homeDemos",
    data(){
      return {
        err: ''
      }
    },
    // computed: mapState({
    //   count: state => state.count,
    //   countAlias: 'count',
    //   countAdd(state){
    //     return state.count ++
    //   }
    // }, {
    //   todos: state => state.todos,
    //   countAlias: 'todos'
    // }),
    computed: {
      count(){
        return user.state.count
      },
      todos(){
        return user.state.todos
      }
    },
    mixins: [data],
    methods: {
      increment(){
        user.commit('increment')

      },
      undo(id){
        user.dispatch('changeDone', id)

      }
    },
    created(){

      // this.getSomething()
      // requestPromise({
      //   url: '/test'
      // }).then(res => {
      //   // 混入通过model获取
      //   model = res
      // }).catch(err => {
      //   console.log(typeof err)
      //   this.err = err
      // })
    }
  }
</script>

<style scoped>

</style>

