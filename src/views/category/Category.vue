<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-25 17:39:08
 * @lastTime: 2019-09-29 18:29:35
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="category">
    <Loading v-if="isLoading" />
    <div class="cate-wrapper">
      <div class="left-wrapper">
        <Scroller ref="scroll">
          <ul class="left-main">
            <li
              class="left-item"
              v-for="(item, index) in categoryListData"
              :key="item.id"
              :class="index === active ? 'active' : ''"
              @click="listClick(index)"
              ref="menuList"
            >
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </Scroller>
      </div>
      <div class="right-wrapper">
        <Scroller ref="rightScroll">
          <div class="right-main">
            <div class="box" v-for="item in categoryDetails" :key="item.id">
              <h2 class="title">{{ item.name }}</h2>
              <div class="product-list">
                <product-item
                  v-for="product in item.products"
                  :key="product.id"
                  :product="product"
                />
              </div>
            </div>
          </div>
        </Scroller>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./components/ProductItem";
export default {
  name: "Category",
  data() {
    return {
      isLoading: true,
      categoryListData: [],
      // 左侧列表激活状态索引值
      active: 0,
      categoryDetails: []
    };
  },
  components: {
    ProductItem
  },
  created() {
    this._onInitData();

    this.probeType = 1;
  },
  methods: {
    async _onInitData() {
      // 获取左侧列表数据
      let leftData = await this.$api.category.getLeftData();
      if (leftData.success) {
        this.categoryListData = leftData.data.cate;
      }

      // 获取右侧内容数据(默认获取第一条)
      let rightData = await this.$api.category.getRightData(1);
      if (rightData.success) {
        this.categoryDetails = rightData.data.cate;
      }
      this.isLoading = false;
    },
    async listClick(index) {
      // 更新激活状态索引
      this.active = index;
      // 触发滚动到当前item
      let Ele = this.$refs.menuList[index];
      this.$refs.scroll.scrollToElement(Ele, 500);

      // 每次都把右边的内容回滚
      this.$refs.rightScroll.scrollTo(0, 0);

      // 获取右侧对应的内容数据
      let rightData = await this.$api.category.getRightData(`${index + 1}`);
      if (rightData.success) {
        this.categoryDetails = rightData.data.cate;
      }
    }
  }
};
</script>

<style lang="scss">
#category {
  height: calc(100% - 50px);
  .cate-wrapper {
    @include align-center(left);
    height: 100%;

    .left-wrapper {
      background: $main-bg;
      width: 24%;
      height: 100%;

      .left-item {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: $dark;
        font-size: 14px;

        &.active {
          background: $white;
          border-left: 2px solid $shallow;
        }
      }
    }
    .right-wrapper {
      background: $white;
      flex: 1;
      height: 100%;

      .box {
        padding: 10px;
        margin-top: 10px;

        h2.title {
          font-size: 20px;
          font-weight: normal;
          border-left: 2px solid $shallow;
          height: 20px;
          line-height: 20px;
          padding-left: 10px;
        }
        .product-list {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
