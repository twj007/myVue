<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/TabBar/MainTabBar'
  import MainNavBar from '@/components/content/NavBar/MainNavBar'
  export default {
    name: 'mainPage',
    components: {MainNavBar, MainTabBar},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      this.$router.push('/home')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
