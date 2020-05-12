<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control ref="tabControl1" 
      @tabClick="tabclick" 
      class="tab-control" 
      :titles="['流行','新款','精选']" 
      v-show="isTabFixed"/>
    <scroll class="wrapper" ref="wrapper" 
    :probeType="3" 
    @scroll="contScroll" 
    :pull-up-load="true"
    @pulling="leadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>

      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control ref="tabControl2" 
      @tabClick="tabclick" 
      :titles="['流行','新款','精选']" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import {debounce} from 'common/utils'
import {itemListenerMixin,backTopMixin} from "common/mixin"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
   mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      // result:null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTabFixed:false,
      saveY:0,
    };
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    },
  },
  activated(){
    // 回来时到达以前的位置
    this.$refs.wrapper.scrollTo(0,this.saveY,10);
    this.$refs.wrapper.refresh()
    
  },
  deactivated(){
    // 离开前记录y的位置
    this.saveY= this.$refs.wrapper.scroll.y

    this.$bus.$off("itemImageLoad",this.itemImgListener)
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();

// 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result=res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.wrapper.finishPullUp()
      });
    },
    // 数据请求
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },

    contScroll(position) {
      // console.log(position);
      this.listenShowBackTop(position)

      this.isTabFixed=position.y<-this.tabOffsetTop
    },
    leadMore(){
      // console.log('加载更多');
      this.getHomeGoods(this.currentType);
      
      this.$refs.wrapper.scroll.refresh()
    },
    swiperImageLoad(){
      // 获取tabControl中的offsetTop
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;

  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1; */
}
.tab-control {
  position: relative;
  z-index: 2;
}
/* .wrapper {
  height: calc(100% - 49px);
  overflow: hidden;
} */

.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>