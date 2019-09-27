/*
 * @message: UI组件库vant的按需引入
 * @Author: lzh
 * @since: 2019-09-25 17:27:39
 * @lastTime: 2019-09-27 11:27:52
 * @LastAuthor: Do not edit
 * @copyright: youai
 */
import Vue from "vue";
import { Tabbar, TabbarItem, Toast, Lazyload, Image, Loading } from "vant";

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Toast)
  .use(Lazyload)
  .use(Image)
  .use(Loading);
