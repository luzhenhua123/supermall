<template>
  <tab-bar>
    <tab-bar-item path="/home"  >
    <template v-slot:item-icon-active><img id="abc"  src="../../../assets/img/tabbar/home_active.svg" alt=""></template>
    <template #item-icon><img src="../../../assets/img/tabbar/home.svg" alt=""></template>
     <template #item-text><div>首页</div></template>
<!--      <img slot="item-icon" src="./src/assets/img/home/home.svg" alt="">-->
<!--      <div slot="item-text">首页</div> -->
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <template #item-icon-active><img  src="../../../assets/img/tabbar/category_active.svg" alt=""></template>
      <template #item-icon><img  src="../../../assets/img/tabbar/category.svg" alt=""></template>
        <template #item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/Cart" >
      <template #item-icon-active><img  src="../../../assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template #item-icon><img  src="../../../assets/img/tabbar/shopcart.svg" alt=""></template>
      <template #item-text><div>购物</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <template #item-icon-active><img  src="../../../assets/img/tabbar/profile_active.svg" alt=""></template>
      <template #item-icon><img  src="../../../assets/img/tabbar/profile.svg" alt=""></template>
      <template #item-text><div>个人</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "../../common/tabbar/TabBarItem";
import TabBar from "../../common/tabbar/TabBar";

export default {
name: "MainTabBar",
  components: {       //注册组件
    TabBar,
    TabBarItem

  }
}
</script>

<style scoped>
/*图片样式*/
.tab-bar-item  img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>