<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <shop-list></shop-list>
    <!-- 底部汇总 -->
    <shop-button-bar/>
  </div>
  
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import ShopList from "./childComps/ShopList"
import ShopButtonBar from "./childComps/ShopButtonBar"

import {mapGetters} from "vuex"

export default {
 name:'Shop',
 components:{
   NavBar,
   ShopList,
   ShopButtonBar
 },
 computed:{
  //  两种写法 数组和对对象写法
  // ...mapGetters(['cartLength','cartList']) 
  ...mapGetters({
    length:'cartLength'
  })
 }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>