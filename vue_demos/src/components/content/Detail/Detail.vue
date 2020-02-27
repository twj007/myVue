<template>
  <div class="detail-content">
    <detail-nav-bar></detail-nav-bar>
    <p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p><p>1111</p>
    <detail-tab-bar :sku="sku"></detail-tab-bar>
  </div>
</template>

<script>
  import DetailNavBar from '@/components/content/NavBar/DetailNavBar'
  import DetailTabBar from '@/components/content/TabBar/DetailTabBar'
  export default {
    name: "Detail",
    components: {DetailNavBar, DetailTabBar},
    data(){
      return {
        sku: ''
      }
    },
    created(){
      this.sku = this.$route.query.id
    }
  }
</script>

<style scoped>
.detail-content{
  position: relative;
  top: 44px;
}
</style>
