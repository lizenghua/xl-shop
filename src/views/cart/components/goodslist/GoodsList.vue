<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-10-08 10:48:17
 * @lastTime: 2019-10-08 11:09:45
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div class="goods-box">
    <ul class="goods-list">
      <li>
        <a href="javascript:void(0)" class="check-item">
          <i class="iconfont icon-xuanzekuang"></i>
        </a>
        <div class="image">
          <van-image lazy-load>
            <template v-slot:loading>
              <van-loading color="#07c160" size="30" />
            </template>
          </van-image>
        </div>
        <div class="main">
          <div class="name-text">萨芬撒飞洒发</div>
          <div class="box">
            <div class="price-main">
              <span class="price text-price">12.32</span>
              <span class="origin-price text-origin">25.36</span>
            </div>
            <div class="num-box">
              <a href="javascript:void(0)" class="reduce">-</a>
              <input type="number" class="num" value="1" />
              <a href="javascript:void(0)" class="add">+</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GoodsList"
};
</script>

<style lang="scss" scoped>
.goods-box {
  position: relative;
  top: 60px;
  left: 0;
  right: 0;
  height: calc(100% - 150px);

  .goods-list {
    li {
      margin-bottom: $padding-item;
      padding: $padding-item;
      background: $white;
      border-radius: 5px;
      width: 100%;
      @include align-center(center);

      .check-item {
        display: inline-block;
        width: 30px;
        .iconfont {
          color: $shallow;
        }
      }
      .image {
        position: relative;
        width: 80px;
        height: 80px;
        margin: auto;
        @include align-center(center);

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
          line-height: 24px;
          height: 48px;
          @include text-overflow-line(2);
        }
        .box {
          @include align-center(space-between);
          margin-top: 5px;

          .origin-price {
            text-decoration: line-through;
            margin-left: 10px;
          }
          .num-box {
            border: 1px solid $border-color;

            a {
              display: inline-block;
              color: $dark;
              font-size: 16px;
              width: 20px;
              text-align: center;
              height: 24px;
              line-height: 24px;
              &.reduce {
                border-right: 1px solid $border-color;
              }
              &.add {
                border-left: 1px solid $border-color;
              }
            }
            .num {
              width: 40px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              color: $dark;
              font-size: 14px;
              border: none;
            }
          }
        }
      }
    }
  }
}
</style>
