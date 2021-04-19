<template>
  <tab-bar>
    <tab-bar-item path="/home"  >
    <template v-slot:item-icon-active><img id="abc"  src="../../../assets/img/home/home_active.svg" alt=""></template>
    <template #item-icon><img src="../../../assets/img/home/home.svg" alt=""></template>
     <template #item-text><div>首页</div></template>
<!--      <img slot="item-icon" src="./src/assets/img/home/home.svg" alt="">-->
<!--      <div slot="item-text">首页</div> -->
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <template #item-icon-active><img  src="../../../assets/img/category/category_active.svg" alt=""></template>
      <template #item-icon><img  src="../../../assets/img/category/category.svg" alt=""></template>
        <template #item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" >
      <template #item-icon-active><img  src="../../../assets/img/shopcart/shopcart_active.svg" alt=""></template>
      <template #item-icon><img  src="../../../assets/img/shopcart/shopcart.svg" alt=""></template>
      <template #item-text><div>购物</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <template #item-icon-active><img  src="../../../assets/img/proflie/profile_active.svg" alt=""></template>
      <template #item-icon><img  src="../../../assets/img/proflie/profile.svg" alt=""></template>
      <template #item-text><div>购物</div></template>
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