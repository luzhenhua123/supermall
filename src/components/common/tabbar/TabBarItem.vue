<template>
<!--      所有的item都展示同一个图片，同一个文字-->

  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else><slot name="item-icon"></slot></div>
    <div :style="activeStyle" ><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default{
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type:String,
      default:'red'      //下导航字体颜色
    }
  },

  data(){
   return{
   // isActive:true
  }
},
  computed: {
    isActive(){   //动态获取isAction
      
    //home -> this.$route.path(/home) = true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }

  },
  methods: {
    itemClick(){
    // console.log('itemClick')
     this.$router.replace(this.path)
  }
}
}
</script>


<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}




</style>