<template>
  <div class="cart">
    <!--导航   -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
      <div >购物车({{ cartLength }})</div></template>
    </nav-bar>
    <!-- 商品的列表  -->
    <cart-list></cart-list>
    <!-- 底部的汇总  -->
    <cart-buttom-bar></cart-buttom-bar>
  </div>
</template>

<script>
import CartList from "./childComps/CartList";
import CartButtomBar from "./childComps/CartButtomBar";

import NavBar from "../../components/common/navbar/NavBar";
import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartButtomBar
  },
  computed: {
    //两种语法(对象语法和数组语法)
    //mapGetters将getters映射到局部计算属性
    ...mapGetters(['cartLength'])

  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: white;

}
</style>
