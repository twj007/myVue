<template>
    <div class="tab-control" >
      <div class="tab-control-item" v-for="item, index in titles" :key="index" @click="changeState(index)">
        <span :class="{active: currentIndex == index}"> {{item}} </span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      },
      currentIndex: {
        default(){
          return 0
        }
      }
    },
    methods: {
      changeState(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  line-height: 30px;
  position: sticky;
  top: 44px;
  background: #ffffff;
  box-shadow: 0 5px 5px rgba(100, 100, 100, 0.1);
}
.tab-control-item{
  flex: 1;
}
.active{
  border-bottom: 1px solid #ff8198;
  padding-bottom: 5px;
}
</style>
