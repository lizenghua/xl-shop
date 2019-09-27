/*
 * @message: 入口文件
 * @Author: lzh
 * @since: 2019-09-25 11:45:44
 * @lastTime: 2019-09-27 10:47:09
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api";
import FastClick from "fastclick";
import Scroller from "@/components/scroller/Scroller";
import Loading from "@/components/loading/Loading";
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}
Vue.config.productionTip = false;
// 将api挂载到vue的原型上，方便api调用
Vue.prototype.$api = api;
Vue.component("Scroller", Scroller);
Vue.component("Loading", Loading);

// 引入全局过滤器
import "@/utils/filters.js";
// 引入rem
import "@/utils/rem.js";
// 引入字体图标
import "@/assets/fonticon/iconfont.css";
// 引入全局ui组件
import "@/plugins/vant";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
