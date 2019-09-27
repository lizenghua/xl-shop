/*
 * @message: 路由入口
 * @Author: lzh
 * @since: 2019-09-25 15:07:35
 * @lastTime: 2019-09-25 19:31:22
 * @LastAuthor: Do not edit
 * @copyright: youai
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "@/router/configrouter";

Vue.use(VueRouter);
export default new VueRouter({
  routes
});
