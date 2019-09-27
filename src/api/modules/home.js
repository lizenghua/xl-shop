/*
 * @message: 首页模块接口
 * @Author: lzh
 * @since: 2019-09-25 20:39:54
 * @lastTime: 2019-09-26 10:32:16
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
import baseurl from "../base";
import { $axios } from "@/utils/http";

const home = {
  // 轮播图
  getHomeBanner() {
    return $axios(`${baseurl.main}/homeApi`);
  }
};
export default home;
