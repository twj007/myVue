<template>
  <div class="tab-bar-item" @click="changeState">
    <div v-if="!isActive"><slot name="tab-bar-icon"></slot></div>
    <div v-else><slot name="tab-bar-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="tab-bar-text"></slot></div>
  </div>  
</template>

<script>
    export default {
      name: "TabBarItem",
      props: {
        link: {
          type: String
        },
        isDefault: {
          type: String
        }
      },
      data(){
        return {
          isActive: false
        }
      },
      methods: {
        changeState(){
          this.$parent.$children.forEach((child)=>{
            child.isActive = false
          });
          this.isActive = !this.isActive
          this.$router.push(this.link)
        }
      },
      mounted(){
        this.isActive = this.isDefault
      }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .active{
    color: red
  }
</style>
