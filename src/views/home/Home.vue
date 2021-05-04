<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">   <!-- 这里probe-type不加: 则传过去的是字符串而不是number-->
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
// import {Swiper,SwiperItem} from "../../components/common/swiper";   //轮播图
import HomeSwiper from "./childComps/HomeSwiper";     //轮播图
import RecommendView from "./childComps/RecommendView"; //四大活动
import FeatureView from "./childComps/FeatureView"; //本周热门

import TabControl from "../../components/content/tabControl/TabControl";
import NavBar from "../../components/common/navbar/NavBar";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop"

import {getHomeMultidata,getHomeGoods} from "../../network/Home";


export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType:'pop',   //默认展示pop
      isShowBackTop: false
    }
  },

  created() {
    // 1.请求多个数据
    // getHomeMultidata().then(res => {
    //   // this.result = res;
    //   this.banners = res.data.banner.list;
    //   this.recommends = res.data.recommend.list;
    // })
    this.getHomeMultidata()
    // 2.请求商品数据
    // getHomeGoods('pop', 1).then(res => {
    //   console.log(res);
    // })
    this.getHomeGoods('pop')   //调用methods ↓
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    //事件监听相关方法
      tabClick(index){
        // console.log(index);
        switch (index){
          case 0:
            this.currentType = 'pop'
                break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    ////////////////////
    //网络请求相关方法  //具体逻辑
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page =this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)  //语法糖 获取数组
        this.goods[type].page  += 1

        this.$refs.scroll.finishPullUp()

      })
    }
  },
  computed:{
    showGoods(){
       return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  /*z-index 属性指定一个元素的堆叠顺序。 拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。*/
}
.tab-control{
  position: sticky;
  top: 44px;
z-index: 9;
  background-color: #ffffff;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/*.content {*/
/*height: calc(100% - 93px);*/
/*overflow: hidden;*/
/*margin-top: 44px;*/
/*}*/
</style>
