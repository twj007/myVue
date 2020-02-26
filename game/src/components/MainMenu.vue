<template>
  <div class="menu">
    <div class="menu-item" slot="menu">
      <button @click="startGame">开始游戏</button>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/common/Menu'
export default {
  name: 'MainMenu',
  components: {Menu},
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    startGame(){
      this.$router.push('/panel');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}

.menu-item {

}
</style>
