<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      defult() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend{
 display: flex;
 text-align: center;
 font-size: 14px;
 padding: 10px 0 20px;
 border-bottom: 10px solid #eee;
}
.recommend-item{
 flex: 1;
}
.recommend-item img{
 width: 85%;
 margin-bottom: 10px;
}
</style>