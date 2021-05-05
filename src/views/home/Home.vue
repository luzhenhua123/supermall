<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control" v-show="isTabFixed"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">   <!-- 这里probe-type不加: 则传过去的是字符串而不是number-->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control"
                   :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"
                    />
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

import { getHomeMultidata,getHomeGoods } from "../../network/Home";
import {debounce} from "../../common/utils";

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
      isShowBackTop: false,
      tabOffsetTop: 0,  //监听滚动长度为545,此处为吸顶效果做铺垫
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
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
  mounted() {

    //3.监听item中图片加载完成
  const  refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.on('itemImageLoad',()=>{
      console.log('---');
      refresh()
    })
  },
  methods: {
    /**
     * 事件监听相关方法
     * **/



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
        //监听下拉
      // console.log(position);
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000  //
      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    loadMore() {      //加载更多
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
        //所有的组件都有一个属性$el:用于获取组件中的元素
      // console.log(this.$refs.tabControl2.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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

  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 9;*/
  /*z-index 属性指定一个元素的堆叠顺序。 拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。*/
}
.tab-control{
  position: relative;
  z-index: 9;
background-color: #ffffff;
  /*position: sticky;  原生实现吸顶效果*/
  /*  top: 44px;*/
  /*  z-index: 9;*/
  /*background-color: #ffffff;*/
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
