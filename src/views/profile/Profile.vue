<template>
  <div id="profile">
  <nav-bar class="nav-bar"><template #center>个人资料</template></nav-bar>

  <user-info/>
  <account-info/>
  <normal-list-view :list-data="orderList"></normal-list-view>
  <normal-list-view :list-data="serviceList"></normal-list-view>
  </div>
  <!--    <scroll class="content1">-->
<!--    </scroll>-->
</template>

<script>
// import Scroll from "../../components/common/scroll/Scroll";
import NavBar from "../../components/common/navbar/NavBar";

import AccountInfo from "./childComps/AccountInfo";
import NormalListView from "./childComps/NormalListView";
import UserInfo from "./childComps/UserInfo";

export default {
name: "Profile",
  components:{
  // Scroll,
    NavBar,
    AccountInfo,
    NormalListView,
    UserInfo
  },
    data(){
      return{
        orderList:[
          {icon:'message.svg',info:'我的消息'},
          {icon:'pointer.svg',info:'积分商城'},
          {icon:'vip.svg',info:'会员卡'}
        ],
        serviceList:[
          {icon:'cart.svg',info:'我的购物车'},
          {icon: 'shopping.svg',info:'下载购物APP'}
        ]
      }
    }
  }
</script>

<style scoped>

.nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
}

#profile {
  background-color: #f2f2f2;
}




</style>