<template>
  <div class="base-info" v-if="Object.keys(goods).length !==0">
   <div class="info-title">{{goods.title}}</div>
   <div class="info-price">
     <span class="newPrice">{{goods.newPrice}}</span>
     <span class="oldPrice">{{goods.oldPrice}}</span>
     <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
   </div>
   <div class="info-other">
     <span>{{goods.columns[0]}}</span>
     <span>{{goods.columns[1]}}</span>
     <span>{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-service">
     <div v-for="index in goods.services.length-1" :key="index">
       <img :src="goods.services[index].icon" alt="">
       <span>{{goods.services[index-1].name}}</span>
     </div>
   </div>
  </div>
</template>

<script>
export default {
 name:'DetailBaseInfo',
 props:{
   goods:{
     type:Object,
     default(){
       return {}
     }
   }
 }
}
</script>

<style scoped>
.base-info{
  margin-top: 12px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  color: #222;
  font-size: 16px;
  font-weight: bold;
}
.info-price{
  margin-top: 8px;
}
.info-price .newPrice{
  font-size: 22px;
  color: var(--color-high-text);
  font-weight: bold;
}
.info-price .oldPrice{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount{
  font-size: 13px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}
.info-other{
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  padding-bottom: 8px;
}
.info-service{
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 13px;
  color: #333;
}
.info-service img{
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
</style>