<template>
    <nav-bar class="nav-bar">
      <div slot="left-bar">111</div>
      <div slot="center-bar">222</div>
      <div slot="right-bar">333</div>
    </nav-bar>
</template>

<script>
  import NavBar from '../../common/NavBar/NavBar'
  export default {
    name: "MainNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .nav-bar{
    background: #ff8198;
    color: #ffffff;
  }
</style>
