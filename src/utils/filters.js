/*
 * @message: 全局过滤器
 * @Author: lzh
 * @since: 2019-09-26 19:02:37
 * @lastTime: 2019-09-26 19:06:26
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
import Vue from "vue";

Vue.filter("moneyFormat", value => {
  return "¥" + Number(value).toFixed(2);
});
