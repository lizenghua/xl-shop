<!--
 * @message: 返回顶部
 * @Author: lzh
 * @since: 2019-09-27 17:32:38
 * @lastTime: 2019-09-29 10:07:12
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <transition name="drop">
    <div class="go-top" @click.stop="handleScrollTop">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GoTop",
  methods: {
    handleScrollTop() {
      this.$emit("scrollTop");
    }
  }
};
</script>

<style lang="scss" scoped>
.go-top {
  @include fix-pos(auto, 15px, 80px, auto);
  padding: 5px 7px;
  background: rgba($color: #000000, $alpha: 0.4);
  border-radius: 5px;
  z-index: 500;

  &.drop-enter-active,
  &.drop-leave-active {
    transition: all 0.3s;
  }
  &.drop-enter,
  &.drop-leave-to {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
