<template>
    <div class="nav-bar">
      <div class="left-bar"><slot name="left-bar"></slot></div>
      <div class="center-bar"><slot name="center-bar"></slot></div>
      <div class="right-bar"><slot name="right-bar"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 44px;
    box-shadow: 0 5px 5px rgba(100, 100, 100, 0.2);
    text-align: center;
  }

  .left-bar, .right-bar {
    width:60px;
  }

  .center-bar {
    flex: 1;
  }

</style>
