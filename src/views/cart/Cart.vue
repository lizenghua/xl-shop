<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-25 17:40:19
 * @lastTime: 2019-10-08 11:06:20
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="cart">
    <!-- S 头部 -->
    <div class="cart-header">
      <h2>购物车</h2>
      <button class="clear-btn">清空购物车</button>
    </div>
    <!-- E 头部 -->
    <!-- S 商品列表 -->
    <GoodsList></GoodsList>
    <!-- E 商品列表 -->
    <!-- S 底部 -->
    <div class="footer-tabbar">
      <div class="left">
        <a href="javascript:void(0)" class="select-all">
          <i class="iconfont icon-xuanzekuang"></i>
        </a>
        <span>全选</span>
        <span class="price">合计:<strong>¥49.00</strong></span>
      </div>
      <div class="right">
        <button class="pay">去结算</button>
      </div>
    </div>
    <!-- E 底部 -->
  </div>
</template>

<script>
import GoodsList from "./components/goodslist/GoodsList";
export default {
  name: "Cart",
  components: {
    GoodsList
  }
};
</script>

<style lang="scss">
#cart {
  height: 100%;

  .cart-header {
    background: $white;
    @include fix-pos(0, 0, auto, 0);
    width: 100%;
    height: 49px;
    line-height: 50px;
    border-bottom: 1px solid $border-color;
    z-index: 99;

    h2 {
      text-align: center;
      font-size: $header-fontsize;
      font-weight: normal;
    }
    .clear-btn {
      @include abs-pos(0, 10px, 0, auto);
      font-size: 14px;
      border: none;
      background: none;
      color: $shallow;
    }
  }
  .footer-tabbar {
    background: $white;
    @include fix-pos(auto, 0, 50px, 0);
    @include align-center(space-between);
    padding-left: 10px;
    width: 100%;
    height: 39px;
    line-height: 40px;
    border-top: 1px solid $border-color;

    .left {
      .select-all {
        .iconfont {
          color: $dark;
          margin-right: 5px;
          color: $shallow;
        }
      }
      span {
        color: $dark;

        &.price {
          color: $primary;
          margin-left: 10px;

          strong {
            margin-left: 5px;
          }
        }
      }
    }
    .pay {
      background: $shallow;
      color: $white;
      font-size: 14px;
      border: none;
      height: 39px;
      line-height: 40px;
      padding: 0 20px;
    }
  }
}
</style>
