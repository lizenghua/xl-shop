<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-09-25 11:45:44
 * @lastTime: 2019-09-29 16:05:02
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 -->
<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#666">
      <van-tabbar-item replace to="/home">
        <p slot="icon" class="iconfont icon-index-select"></p>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <p slot="icon" class="iconfont icon-leimupinleifenleileibie"></p>
        <span>分类</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart">
        <p slot="icon" class="iconfont icon-qicheqianlian-"></p>
        <span>购物车</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="mine">
        <p slot="icon" class="iconfont icon-Icon_wode"></p>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>

    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <transition mode="out-in">
      <router-view />
    </!-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabBarActiveIndex")) || 0
    };
  },
  watch: {
    active(value) {
      let tabBarActiveIndex = value > 0 ? value : 0;
      sessionStorage.setItem("tabBarActiveIndex", tabBarActiveIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
#app .iconfont {
  font-size: 16px;
}
.v-enter {
  opacity: 0;
  transform: translate(150px, 0);
}
.v-leave-to {
  opacity: 0;
  transform: translate(-150px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
</style>
