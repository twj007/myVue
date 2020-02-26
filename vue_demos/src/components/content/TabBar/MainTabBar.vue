<template>
    <tab-bar>
      <tab-bar-item link="/home" isDefault="true">
        <img slot="tab-bar-icon" src="../../../assets/img/tabbar/home.svg">
        <img slot="tab-bar-icon-active" src="../../../assets/img/tabbar/home_active.svg">
        <div slot="tab-bar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="tab-bar-icon" src="../../../assets/img/tabbar/category.svg">
        <img slot="tab-bar-icon-active" src="../../../assets/img/tabbar/category_active.svg">
        <div slot="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
        <img slot="tab-bar-icon" src="../../../assets/img/tabbar/cart.svg">
        <img slot="tab-bar-icon-active" src="../../../assets/img/tabbar/cart_active.svg">
        <div slot="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="tab-bar-icon" src="../../../assets/img/tabbar/profile.svg">
        <img slot="tab-bar-icon-active" src="../../../assets/img/tabbar/profile_active.svg">
        <div slot="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '../../common/TabBar/TabBar'
  import TabBarItem from '../../common/TabBar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {TabBar, TabBarItem},
    mounted(){
      this.$router.push("/home")
    }
  }
</script>

<style scoped>

</style>
