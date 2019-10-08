<!--
 * @message: 首页头部组件
 * @Author: lzh
 * @since: 2019-09-26 10:58:21
 * @lastTime: 2019-09-30 11:48:27
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="header">
    <div class="address-box">
      <i class="iconfont icon-dizhi"></i>
      <span>广州</span>
      <i class="iconfont icon-down-copy-copy"></i>
    </div>
    <div class="search-box">
      <i class="iconfont icon-search"></i>
      <input type="text" class="text-dark" placeholder="请输入商品名称" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#header {
  @include fix-pos(0, 0, auto, 0);
  height: 50px;
  background: $white;
  border-bottom: 1px solid $border-color;
  @include align-center(left);
  padding: 0 10px;
  z-index: 999;

  .address-box {
    @include align-center(left);

    span {
      display: inline-block;
      font-size: 14px;
      width: 40px;
      margin-left: 4px;
      @include text-overflow;
    }
    .iconfont {
      color: $icon-color;
      font-size: 24px;
    }
  }
  .search-box {
    @include align-center(left);
    flex: 1;
    margin-left: 10px;
    background: $main-bg;
    border-radius: $border-radius;
    height: 40px;
    padding: 0 10px;

    input {
      flex: 1;
      padding-left: 10px;
      background: none;
      border: none;
      display: inline-block;
      height: 34px;
      margin: 3px auto;
      font-size: 14px;
    }
  }
}
</style>
