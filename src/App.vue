<template>
  <div id="app" class="wrapper">
<!--    vue3.0 keep-alive方法-->
    <div class="text1">
    <router-view v-slot="{ Component }">
      <keep-alive  exclude="Detail" >
        <component :is="Component" />
      </keep-alive>
    </router-view>

<!--    <router-view></router-view>-->
    <main-tab-bar></main-tab-bar>
<!--    <a-vue></a-vue>-->
    </div>
  </div>

</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {       //注册组件
    MainTabBar

  }
}
</script>
<style>
@import "./assets/css/base.css";
@media screen and ( min-width: 1024px ) {
  
}


</style>
