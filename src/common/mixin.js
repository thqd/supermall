import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
 data() {
  return {
   itemImgListener: null,
   refresh: null
  }
 },
 mounted() {
  // 防抖
  this.refresh = debounce(this.$refs.wrapper.refresh, 50)
  // 监听item中图片加载完成 对监听的事件进行保存
  this.itemImgListener = () => {
   this.refresh()
  }
  this.$bus.$on('itemImageLoad', this.itemImgListener)
 },
}

export const backTopMixin = {
 components: {
  BackTop
 },
 data() {
  return {
   isShow: false,
   tabOffsetTop: 0
  }
 },
 methods: {
  backClick() {
   this.$refs.wrapper.scrollTo(0, 0, 300);
   // console.log("被点击了");
  },
  listenShowBackTop(position) {
   // console.log(position);
   this.isShow = position.y < -1000;

   // this.isTabFixed=position.y<-this.tabOffsetTop
  },
 }
}