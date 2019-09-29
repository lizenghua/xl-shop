<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-25 16:47:46
 * @lastTime: 2019-09-29 15:04:06
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="home">
    <Header />
    <Loading v-if="isLoading" />
    <Scroller
      @scroll="scroll"
      :listenScroll="listenScroll"
      :probeType="probeType"
      ref="scroll"
    >
      <div class="container-wrapper">
        <Banner :banner-list="bannerData" />
        <Nav :nav-list="navData" />
        <YouLike :like-list="youlikeData" />
      </div>
    </Scroller>
    <GoTop v-show="isShowTop" @scrollTop="handleToTop">
      <i class="iconfont icon-huidingbu"></i>
    </GoTop>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import YouLike from "./components/youlike/YouLike";
import GoTop from "@/components/gotop/GoTop";
export default {
  name: "Home",
  data() {
    return {
      isLoading: true,
      isShowTop: false,
      scrollY: -1,
      bannerData: [],
      navData: [],
      youlikeData: []
    };
  },
  components: {
    Header,
    Banner,
    Nav,
    YouLike,
    GoTop
  },
  created() {
    this._onLoadBanner();

    this.probeType = 3;
    this.listenScroll = true;
  },
  methods: {
    async _onLoadBanner() {
      let res = await this.$api.home.getHomeBanner();
      if (res.success) {
        this.bannerData = res.data.list[0].icon_list;
        this.navData = res.data.list[2].icon_list;
        this.youlikeData = res.data.list[12].product_list;
        this.isLoading = false;
      }
    },
    scroll(pos) {
      this.scrollY = pos.y;
    },
    handleToTop() {
      this.$refs.scroll.scrollTo(0, 0, "east");
    }
  },
  watch: {
    scrollY(newY) {
      newY < -500 ? (this.isShowTop = true) : (this.isShowTop = false);
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: calc(100% - 100px);
  .icon-huidingbu {
    font-size: 18px;
    color: $white;
  }
}
.container-wrapper {
  margin: 50px 0;
}
</style>
