<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped>
.tab-bar{
  display: flex;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
}
</style>
