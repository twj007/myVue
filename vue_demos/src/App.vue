<template>
  <div id="app">
    <router-view/>
    <easy-go-top
      :custom-style="{ boxShadow: 'none' }"
      :size="52"
      background-color="rgb(231, 234, 241)"
      color="#9aaabf"
      :bottom="60"
      :right="30"
    ></easy-go-top>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
</style>
