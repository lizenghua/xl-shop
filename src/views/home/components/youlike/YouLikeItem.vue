<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-26 17:46:15
 * @lastTime: 2019-09-27 11:33:52
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div class="you-like-item">
    <div class="image">
      <van-image :src="product.small_image" lazy-load>
        <template v-slot:loading>
          <van-loading color="#07c160" size="30" />
        </template>
      </van-image>
    </div>
    <div class="name-text">
      {{ product.product_name }}
    </div>
    <div class="price-box">
      <div class="price-main">
        <span class="price text-price">{{ product.price | moneyFormat }}</span>
        <span class="origin-price text-origin">{{
          product.origin_price | moneyFormat
        }}</span>
      </div>
      <div class="cart">
        <i class="iconfont icon-cart_active"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YouLikeItem",
  props: {
    product: Object
  }
};
</script>

<style lang="scss" scoped>
.you-like-item {
  background: $white;
  flex: 1;
  margin: 0 $padding-item $padding-item 0;
  border-radius: $border-radius;
  padding: 10px;

  .image {
    position: relative;
    width: 130px;
    height: 130px;
    margin: auto;
    @include align-center(center);

    img {
      max-width: 130px;
      max-height: 130px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: auto;
      height: auto;
      margin: auto;
    }
  }
  .name-text {
    font-size: 14px;
    height: 72px;
    line-height: 24px;
    margin: 10px 0;
    @include text-overflow-line(3);
  }
  .price-box {
    @include align-center(space-between);

    .price-main {
      flex: 1;

      .price {
        font-size: 14px;
        font-weight: bold;
      }
      .origin-price {
        font-weight: bold;
        margin-left: 5px;
        font-size: 12px;
        text-decoration: line-through;
      }
    }
    .cart {
      width: 40px;
      height: 40px;
      background: $shallow;
      border-radius: 50%;
      @include align-center(center);

      .iconfont {
        font-size: 22px;
        color: $white;
      }
    }
  }
}
</style>
