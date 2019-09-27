<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-26 14:33:38
 * @lastTime: 2019-09-26 18:57:13
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="banner">
    <swiper id="swiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="image in bannerList" :key="image.public_id">
        <img :src="image.icon_url" :alt="image.public_name" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Banner",
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 1000
        },
        speed: 600
      }
    };
  },
  props: {
    bannerList: Array
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
#swiper {
  width: 100%;
  height: 100%;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet-active {
    background-color: $primary !important;
  }
}
</style>
