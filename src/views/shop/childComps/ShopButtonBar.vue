<template>
  <div class="button-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">合计:{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">去结算({{checkLenth}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "ShopButtonBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLenth() {
      return this.cartList.filter(item => item.check).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      // 多种方法判断是否全选
      // return !(this.cartList.filter(item => !item.check).length)
      // return !this.cartList.find(item => !item.check)

      return this.cartList.every(item => item.check);

      // for(let i of this.cartList){
      //   if(!i.check){
      //     return false
      //   }
      // }
      // return true
    }
  },
  methods: {
    checkClick() {
      console.log("----");

      if (this.isSelectAll) {
        //判断全选的时候
        return this.cartList.forEach(item => {
          item.check = false;
        });
      } else {
        //有没选中或全不选
        return this.cartList.forEach(item => (item.check = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买商品", 1500);
      }
    }
  }
};
</script>

<style scoped>
.button-bar {
  background-color: #eee;
  height: 40px;
  position: relative;
  display: flex;
  line-height: 40px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 30px;
  flex: 1;
}
.calculate {
  width: 100px;
  background-color: rgba(255, 0, 0, 0.76);
  text-align: center;
  color: #fff;
}
</style>