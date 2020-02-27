<template>
  <div>
    <main-nav-bar></main-nav-bar>
    <home-swipe :banners="banners"></home-swipe>
    <tab-control @changeState="changeData" :titles="['新品', '热卖', '聚划算']"></tab-control>
    <main-scroll class="content"
                 ref="scroll"
                 @scroll="contentScroll"
                 :data="showGoodList"
                 :pull-up-load="true"
                 :probe-type="3">
      <data-panel :list="showGoodList"></data-panel>
      <div class="loading-wrapper" @click="getGoodsData">
        <p>加载更多...</p>
      </div>
    </main-scroll>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import {getHomeMultiData, getHomeGoodMock} from '@/network/request/home'
  import {data} from '@/common/mixins'
  import HomeSwipe from '@/components/content/Swipe/HomeSwipe'
  import TabControl from '@/components/content/TabControl/TabControl'
  import DataPanel from '@/components/content/DataPanel/DataPanel'
  import MainScroll from '@/components/common/scroll/MainScroll'
  import MainTabBar from '@/components/content/TabBar/MainTabBar'
  import MainNavBar from '@/components/content/NavBar/MainNavBar'

  export default {
    name: "home",
    components: {MainScroll, HomeSwipe, TabControl, DataPanel, MainTabBar, MainNavBar},
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
        }],
        goods: {
          pop: {page: 0, list: []},
          record: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: 'pop',
        pulldown: true,
        isTabFixed: false,
        tabOffsetTop: 0,
        showBackTop: false
      }
    },
    computed: {
      showGoodList(){
        return this.goods[this.currentType].list
      }
    },
    mixins: [data],
    methods: {
      changeData(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'record'
            break
          case 2:
            this.currentType = 'sell'
            break
          default:
            break
        }
      },
      getGoodsData(){
        getHomeGoodMock().then(res => {
          if(res.status == 200){
            this.goods.pop.list.push(...res.data.list)
            // this.goods.record.list.push(...res.data.list)
            // this.goods.sell.list.push(...res.data.list)
            res.data.list.forEach(v => {
              if(v.link == ''){
                this.goods.record.list.push(v)
              }
            })
            res.data.list.forEach(v => {
              if(v.title == ''){
                this.goods.sell.list.push(v)
              }
            })
            this.goods.pop.page += 1
            this.goods.record.page += 1
            this.goods.sell.page += 1
            this.$refs.scroll.finishPullUp()
            // this.$nextTick(() => {
            //   if (!this.scroll) {
            //     this.scroll = new BScroll(this.$refs.wrapper, {})
            //     this.scroll.on('touchEnd', (pos) => {
            //       console.log(pos)
            //       // 下拉动作
            //       if (pos.y > 50) {
            //         this.getGoodsData()
            //       }
            //     })
            //   } else {
            //     this.scroll.refresh()
            //   }
            // })
          }else{
            console.error('bad request')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getHomeData(){
        getHomeMultiData().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      contentScroll(position) {
        console.log(position)
        // 1.决定tabFixed是否显示
        this.isTabFixed = position.y <= -this.tabOffsetTop

      }

    },
    created() {
      //this.getHomeData()
      this.getGoodsData()
    }
  }
</script>

<style scoped>
  .loading-wrapper {
    text-align: center;
    line-height: 20px;
  }
  .loading-wrapper p:hover{
    border-bottom: 1px solid black;
    cursor: pointer;
  }
</style>
