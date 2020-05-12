module.exports = {
 configureWebpack: {
  resolve: {
   alias: {
    "assets": "@/assets",
    "common": "@/common",
    "components": "@/components",
    "network": "@/network",
    "views": "@/views"
   }
  }
 },
 css: {
  loaderOptions: {
   postcss: {
    plugins: [
     require("postcss-px-to-viewport")({
      unitToConvert: "px",
      viewportWidth: 375,  //视窗的宽度 对应设计稿的宽度
      viewportHeight: 667, //视窗的高度
      unitPrecision: 3,   //转换单位小数的位数
      // propList: [
      //  "*"
      // ],
      viewportUnit: "vw", //指定需要转换的单位  建议vw
      fontViewportUnit: "vw",
      selectorBlackList: ["tab-bar", "tab-bar-item"],//排除一些样式
      minPixelValue: 1,  //最小转换的单位
      mediaQuery: false, //是否允许媒体查询中转换px
      replace: true,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
     })
    ]
   }
  }
 }

}