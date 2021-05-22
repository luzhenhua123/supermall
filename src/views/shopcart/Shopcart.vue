<template>
<h2>购物车</h2>
  <goods-list ref="recommend" :goods="recommends"/>
</template>

<script>
import GoodsList from "../../components/content/goods/GoodsList";
export default {
name: "Shopcart",
  components:{
  GoodsList
  }
}
</script>

<style scoped>

</style>