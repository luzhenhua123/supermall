<template>
  <div id="nav">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
<!--    <a-vue></a-vue>-->
  </div>

</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
// import  aVue from './components/a'
export default {
  name: 'App',
  components: {       //注册组件
    MainTabBar
    // aVue:aVue
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
