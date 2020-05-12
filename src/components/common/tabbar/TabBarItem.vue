<template>
  <div class="tab-bar-item" @click="itmeClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path);
    },
    activeStyle() {
      return !this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itmeClick() {
      if (this.$route.path != this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
/* .active {
  color: red;
} */
</style>