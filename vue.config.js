/*
 * @message:
 * @Author: lzh
 * @since: 2019-09-26 12:03:58
 * @lastTime: 2019-09-29 16:15:55
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整;
        data: `@import "@/assets/styles/global.scss";`
      }
    }
  }
};
