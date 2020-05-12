<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cotegory" activeColor="yellow">
      <img slot="item-icon" src="~assets/img/tabbar/cotegory.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/cotegory_active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="item-icon" src="~assets/img/tabbar/shop.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/shop_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/me">
      <img slot="item-icon" src="~assets/img/tabbar/me.svg" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/me_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>