/*
 * @message:
 * @Author: lzh
 * @since: 2019-09-25 11:45:44
 * @lastTime: 2019-09-26 10:04:48
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
