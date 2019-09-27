<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-26 17:23:08
 * @lastTime: 2019-09-26 18:22:41
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="youlike">
    <div class="title">
      <div class="middle-line"></div>
      <h2>猜你喜欢</h2>
    </div>
    <div class="product-box">
      <YouLikeItem
        v-for="product in likeList"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import YouLikeItem from "./YouLikeItem";
export default {
  name: "YouLike",
  data() {
    return {};
  },
  props: {
    likeList: Array
  },
  components: {
    YouLikeItem
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  margin: $padding-aligin 0;
  height: 30px;
  line-height: 30px;

  .middle-line {
    padding-top: 15px;
    border-bottom: 1px solid $border-line;
  }
  h2 {
    @include abs-pos(0, 50%, 0, 50%);
    background: $main-bg;
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    margin-left: -50px;
  }
}
.product-box {
  @include align-center(space-between);
  flex-wrap: wrap;
  margin-left: $padding-item;
}
</style>
