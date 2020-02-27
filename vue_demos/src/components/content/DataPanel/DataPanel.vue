<template>
    <div class="data-panel">
      <div class="data-panel-item" v-for="item, index in list" :key="index" @click="getDetail(item.title)">
        <img :src="item.img">
        <p>{{item.title}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: "DataPanel",
    props: {
      list: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      getDetail(id){
        this.$router.push({path: '/detail', query: {id: id}})
      }
    }
  }
</script>

<style scoped>
.data-panel{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.data-panel-item{
  width: 48%;
  height: 100%;
}
.data-panel-item img {
  width: 100%;
  height: 100%;
}
</style>
