<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-26 16:37:31
 * @lastTime: 2019-09-26 17:15:25
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="Nav">
    <ul>
      <li v-for="item in navList" :key="item.public_id">
        <img :src="item.icon_url" :alt="item.name" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    navList: Array
  }
};
</script>

<style lang="scss" scoped>
ul {
  background: $white;
  padding: $padding-aligin 0;
  @include align-center(center);
  flex-wrap: wrap;

  li {
    flex: 0 0 20%;
    text-align: center;

    &:nth-child(-n + 5) {
      padding-bottom: $padding-item;
    }
    img {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 auto 3px;
    }
    p {
      font-size: 12px;
      color: $dark;
    }
  }
}
</style>
