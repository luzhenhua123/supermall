<template>
  <div id="Home">
    <nav-bar class="home"><template #center>购物街</template></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
// import {Swiper,SwiperItem} from "../../components/common/swiper";   //轮播图
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";


import {getHomeMultidata} from "../../network/Home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
},
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
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
</style>
