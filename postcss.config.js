/*
 * @message: 配置 pxtorem
 * @Author: lzh
 * @since: 2019-09-25 11:45:44
 * @lastTime: 2019-09-26 15:44:51
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"]
    }
  }
};
