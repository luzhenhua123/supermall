<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null,
      message:'哈哈哈'
    }
  },
  methods:{
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }

  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      observeImage:true,
      //控制类似于div这种元素是否可以点击
      click:true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    //2.监听滚动的位置
    if (this.probeType ===2 || this.probeType === 3){
      this.scroll.on('scroll',(positon) => {
        // console.log(positon);
        this.$emit('scroll',positon)
      })
    }

    //3.监听scroll滚动到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  }
}
</script>

<style scoped>

</style>



<!--
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null,
      message: '哈哈哈'
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      mouseWheel:true,//开启鼠标滚轮
      disableTouch:false, //启用鼠标拖动
      observeDOM:true,

      })

    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })

    // 3.监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },

  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh(){
      console.log('&#45;&#45;&#45;&#45;')
      this.scroll && this.scroll.refresh()
    }

  }
}
</script>
-->


