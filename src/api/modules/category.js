/*
 * @message:
 * @Author: lzh
 * @since: 2019-09-29 15:05:58
 * @lastTime: 2019-09-29 16:49:23
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
import baseurl from "../base";
import { $axios } from "@/utils/http";

const category = {
  // 左侧列表
  getLeftData() {
    return $axios(`${baseurl.main}/homeApi/categories`);
  },
  // 右侧内容
  getRightData(id) {
    return $axios(`${baseurl.main}/homeApi/categoriesdetail/lk00${id}`);
  }
};
export default category;
