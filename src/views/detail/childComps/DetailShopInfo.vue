<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sell-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{ item.isBetter? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
     <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.shop-info{
 padding: 25px 8px;
 border-bottom: 5px solid #f2f5f8;
}
.shop-top{
 line-height: 45px;
 display: flex;
 align-items: center;
}
.shop-top img{
 width: 45px;
 height: 45px;
 border-radius: 50%;
 border: 2px solid rgba(0, 0, 0, 0.1);
}
.shop-top .title{
 margin-left: 10px;
 font-weight: bold;
}
.shop-middle{
 margin-top: 15px;
 display: flex;
 align-items: center;
}
.shop-middle-item{
 flex: 1;
}
.shop-middle-left{
 display: flex;
 justify-content: space-evenly;
 text-align: center;
 color: #333;
 border-right: 2px solid rgba(0, 0, 0, 0.1);
}
.sells-count,.goods-count{
 font-size: 16px;
}
.sells-text,.goods-text{
 font-size: 15px;
 margin-top: 8px;
}
.shop-middle-right{
 font-size: 15px;
 color: #333;
}
.shop-middle-right table{
 /* margin-left: 30px; */
 margin: 0 auto;
 width: 125px;
}
.shop-middle-right table td{
 padding: 4px 0;
}
.shop-middle-right .score{
 color: #5ea732;
}
.shop-middle-right .score-better{
  color: #f13e3a;
}
.shop-middle-right .better span{
 background-color: #5ea732;
 color: #fff;
 text-align: center;
}
.shop-middle-right .better-more span{
 background-color: #f13e3a;
  color: #fff;
}
.shop-bottom{
 font-size: 16px;
 text-align: center;
}
.enter-shop{
 width: 150px;
 height: 30px;
 line-height: 30px;
 background-color: rgba(0, 0, 0, 0.1);
 border-radius: 8px;
 margin: 15px auto 2px;
}
</style>