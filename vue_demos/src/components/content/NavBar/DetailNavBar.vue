<template>
  <nav-bar class="nav-bar">
    <div slot="left-bar" @click="goBack">返回</div>
  </nav-bar>
</template>

<script>
  import NavBar from '../../common/NavBar/NavBar'
  export default {
    name: "DetailNavBar",
    components: {NavBar},
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.nav-bar {
  background: #ff8198;
  color: #ffffff;
}
.nav-bar :first-child{
  border-right: 1px solid #eee;
  cursor: pointer;
}
</style>
