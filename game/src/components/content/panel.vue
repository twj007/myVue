<template>
    <div>
      <nav-bar class="nav-bar">
        <div slot="left-bar">log</div>
        <div slot="center-bar">步数: {{step}}</div>
        <div slot="right-bar"></div>
      </nav-bar>
      <dashboard></dashboard>
    </div>
</template>

<script>
  import NavBar from '@/components/common/NavBar'
  import Dashboard from '@/components/common/Dashboard'
  import store from '@/store/store'
  export default {
    name: "panel",
    computed: {
      step(){
        return store.getters.step
      },
      finalList(){
        return store.getters.finalList
      }
    },
    components: {NavBar, Dashboard}
  }
</script>

<style scoped>

</style>
