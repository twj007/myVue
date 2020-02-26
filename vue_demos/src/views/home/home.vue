<template>
    <div>
      <home-swipe :banners="banners"></home-swipe>
      <tab-control :titles="['新品', '热卖', '聚划算']"></tab-control>
      <p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p><p>aaaa</p>

    </div>
</template>

<script>
  import {getHomeMultiData} from '@/network/request/home'
  import {data} from '@/common/mixins'
  import HomeSwipe from '@/components/content/Swipe/HomeSwipe'
  import TabControl from '@/components/content/TabControl/TabControl'

  export default {
    name: "home",
    components: {HomeSwipe, TabControl},
    data(){
      return {
        banners: [{
          link: 'https://www.baidu.com',
          img: 'https://www.baidu.com/img/bd_logo1.png?where=super'
        }, {
          link: 'https://www.baidu.com',
          img: 'https://www.baidu.com/img/bd_logo1.png?where=super'
        }, {
          link: 'https://www.baidu.com',
          img: 'https://www.baidu.com/img/bd_logo1.png?where=super'
        }]
      }
    },
    computed: {

    },
    mixins: [data],
    methods: {

    },
    created() {
      getHomeMultiData().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>

</style>
