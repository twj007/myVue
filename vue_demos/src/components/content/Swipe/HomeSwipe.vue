<template>
    <div>
      <swipe>
        <swipe-item v-for="item, index in banners" :key="index" class="swipe-item">
          <a :href="item.link">
            <img :src="item.img">
          </a>
        </swipe-item>
      </swipe>
    </div>
</template>

<script>
  import 'c-swipe/dist/swipe.css'
  import {Swipe, SwipeItem} from 'c-swipe'

  export default {
    name: "HomeSwipe",
    components: {Swipe, SwipeItem },
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.swipe-item img{
  width: 100%;
  height: 100%;
}
</style>
