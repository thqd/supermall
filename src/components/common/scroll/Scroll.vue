<template>
  <div ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    // probeType设置监听滚动 值为0,1,2,3
    // pullUpLoad 下拉加载更多 true
    // let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    console.log(this.scroll);

    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pulling");
    });
  },
  methods: {
    // scrollTo(x,y,time){
    //   this.scroll.scrollTo(x,y,time)
    // }
    //回到顶部 x和y轴
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    //  refresh
    refresh() {
      console.log("-------");
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>