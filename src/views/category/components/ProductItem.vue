<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-29 17:39:54
 * @lastTime: 2019-09-29 18:20:52
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div class="product-item">
    <div class="image">
      <van-image :src="product.small_image" lazy-load>
        <template v-slot:loading>
          <van-loading color="#07c160" size="30" />
        </template>
      </van-image>
    </div>
    <div class="main">
      <div class="name-text">
        {{ product.product_name }}
      </div>
      <div class="price-box">
        <div class="price-main">
          <span class="price text-price">{{
            product.price | moneyFormat
          }}</span>
          <span class="origin-price text-origin">{{
            product.origin_price | moneyFormat
          }}</span>
        </div>
        <div class="cart">
          <i class="iconfont icon-cart_active"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object
  }
};
</script>

<style lang="scss" scoped>
.product-item {
  border-bottom: 1px dashed $shallow;
  padding: 10px 0;
  @include align-center(center);

  .image,
  .van-image {
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;

    img {
      max-width: 80px;
      max-height: 80px;
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
  .main {
    flex: 1;
    margin-left: 10px;

    .name-text {
      font-size: 14px;
      height: 48px;
      line-height: 24px;
      margin-bottom: 10px;
      @include text-overflow-line(2);
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
        width: 26px;
        height: 26px;
        background: $shallow;
        border-radius: 50%;
        @include align-center(center);

        .iconfont {
          font-size: 16px;
          color: $white;
        }
      }
    }
  }
}
</style>
