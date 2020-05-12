<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="wrapper"
      :pull-up-load="true"
      @scroll="contentScroll"
      :probe-type="3"
      ref="wrapper"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="Goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <!-- <toast :message="" :show=""/> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
// import Toast from "components/common/toast/Toast"

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import { debounce } from "common/utils";
import { itemListenerMixin, backTopMixin } from "common/mixin";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      Goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      getThemeTop: null,
      currentIndex: 0
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取详情页顶部的轮播数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品数据
      this.Goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.获取店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.获取商品详情信息
      this.detailInfo = data.detailInfo;

      // 5.获取参数信息
      // this.paramInfo= new GoodsParam(data.itemParams.info,data.itemParams.rule)
      this.paramInfo = data.itemParams;

      // 6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      // 获取组件的offsetTop  $nextTick()获取下一帧，组件内容执行完后执行 图片没计算在内
      // this.$nextTick(() => {});
    });

    // 3.请求推荐数据
    getRecommend().then(res => {
      console.log(res);
      this.recommends = res.data.list;
    });

    // 4.给getThemeTop 赋值
    this.getThemeTop = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);

      console.log(this.themeTopY);
    }, 100);
  },
  methods: {
    ...mapActions(["addCart"]),
    imageLoad() {
      this.$refs.wrapper.refresh();
      this.getThemeTop();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.wrapper.scrollTo(0, -this.themeTopY[index] + 44, 100);
    },
    contentScroll(position) {
      // 获取Y值
      const positionY = -position.y;
      // 遍历边界值
      let length = this.themeTopY.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i === length - 1 && positionY >= this.themeTopY[i] - 44) ||
            (i < length - 1 &&
              positionY >= this.themeTopY[i] - 44 &&
              positionY < this.themeTopY[i + 1] - 44))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.listenShowBackTop(position);
    },
    addToCart() {
      // 加入购物车  获取购物车需要展示的信息
      console.log("---");
      const product = {};
      product.image = this.topImages[0];
      product.title = this.Goods.title;
      product.desc = this.Goods.desc;
      product.price = this.Goods.realPrice;
      product.iid = this.iid;

      // 使用mapAction 映射
      this.addCart(product).then(res => {
        console.log(res);
        this.$toast.show("添加购物车成功",2000)
        console.log(this.$toast);
        
      });

      // 将商品添加到购物车里面
      // this.$store.commit("addCart",product)  mutations 里面
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
    }
  },
  destroyed() {
    // console.log('destroyed');
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 2;
  height: 100vh;
}
.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 2;
}
.wrapper {
  height: calc(100% - 44px - 49px);
}
</style>