<template>
  <nav-bar class="home-nav"><template #center>个人资料</template></nav-bar>
    <div class="nav">
      <div class="img_profile"><img src="../../components/90066137.jpg" alt=""></div>
      <div class="middle">
      <div class="sign_in" style="font-size: 14px;padding-bottom: 5px">登录 / 注册</div>
      <div class="number" style="font-size: 12px">暂无手机号绑定</div>
      </div>
      <div class="img_forward">
        <img src="../../assets/img/common/back.svg" alt="">
      </div>
    </div>

    <div class="news">
      <div class="news_item">
        <div class="item_number"><strong style="font-size: 20px">0.00</strong>元</div>
        <div class="item_text">我的余额</div>
      </div>
      <div class="news_item">
        <div class="item_number"><strong style="font-size: 20px">0</strong>个</div>
        <div class="item_text">我的优惠</div>
      </div>
      <div class="news_item">
        <div class="item_number"><strong style="font-size: 20px">0</strong>分</div>
        <div class="item_text">我的积分</div>
      </div>
    </div>

      <div class="bg_color" style="background:rgba(150,150,150,.08);height: 10px"></div>
      <div class="a_item">我的消息</div>
      <div class="a_item">积分商城</div>
      <div class="a_item">会员卡</div>
  <div class="bg_color" style="background:rgba(150,150,150,.08);height: 10px"></div>
      <div class="a_item"><router-link to="Shopcart" style="text-decoration: none;color: black">我的购物车</router-link></div>
      <div class="a_item">下载购物APP</div>



  <div></div>
<!--    <scroll class="content1">-->
<!--    </scroll>-->
</template>

<script>
// import Scroll from "../../components/common/scroll/Scroll";
import NavBar from "../../components/common/navbar/NavBar";
export default {
name: "Profile",
  components:{
  // Scroll,
    NavBar
  }
}
</script>

<style scoped>

.home-nav{
  background-color: var(--color-tint);
  color: #ffffff;
}
.nav{
  background-color: var(--color-tint);
  height: 80px;
  color: #ffffff;
}
.img_profile img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 10px;

}
.img_forward img{
    transform: scaleX(-1);    /*图片镜像*/
  float: right;
  padding: 16px;
  width: 18px;
  height: 18px;
  filter:  brightness(1000%);
  margin-top: 20px;

}
.middle {
      padding: 15px;
      margin-top: 10px;
}

.img_profile,.middle{
  float: left;
}

.news{
display:flex;
}
.news_item{
  flex: 1;
  text-align: center;
  padding: 15px;
  /*box-shadow: 0px 10px 1px rgba(150,150,150,.08);*/

}
.item_number strong{
  color: red;
}
.news_item{
  font-size: 12px;
  border-right: 2px solid rgba(150,150,150,.1);
}

.news_item:last-child{
  border-right: none;
}

.a_item{
  padding: 10px;
  box-shadow: 0px 1px 1px rgba(150,150,150,.1);
}
</style>