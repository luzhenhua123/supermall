<template>
  <div id="Home">
    <nav-bar class="home"><template #center>购物街</template></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>


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


import {getHomeMultidata,getHomeGoods} from "../../network/Home";

export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList

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
      currentType:'pop'   //默认展示pop
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
#Home{
  padding-top: 44px;
}

.home{
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
</style>
