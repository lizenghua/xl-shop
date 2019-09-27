<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-25 16:47:46
 * @lastTime: 2019-09-26 20:56:26
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="home">
    <Header />
    <div class="scroll-body" ref="scrollBody">
      <div class="container-wrapper">
        <Banner :banner-list="bannerData" />
        <Nav :nav-list="navData" />
        <YouLike :like-list="youlikeData" />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Nav from "./components/nav/Nav";
import YouLike from "./components/youlike/YouLike";
export default {
  name: "Home",
  data() {
    return {
      bannerData: [],
      navData: [],
      youlikeData: []
    };
  },
  components: {
    Header,
    Banner,
    Nav,
    YouLike
  },
  created() {
    this.onLoadBanner();
  },
  methods: {
    onLoadBanner() {
      this.$api.home.getHomeBanner().then(res => {
        if (res.success) {
          this.bannerData = res.data.list[0].icon_list;
          this.navData = res.data.list[2].icon_list;
          this.youlikeData = res.data.list[12].product_list;

          // 一定要在数据完全加载渲染完后再调用
          this.$nextTick(() => {
            new BScroll(this.$refs.scrollBody, { tap: true, probeType: 1 });
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home,
.scroll-body {
  height: 100%;
}
.container-wrapper {
  margin: 50px 0;
}
</style>
