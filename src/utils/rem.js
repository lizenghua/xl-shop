/*
 * @message: 配置 rem
 * @Author: lzh
 * @since: 2019-09-26 15:24:06
 * @lastTime: 2019-09-26 15:50:21
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
// 基准大小
const baseSize = 32;
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750;
  const fontSize = baseSize * Math.min(scale, 2);
  document.documentElement.style.fontSize =
    fontSize > 20 ? 20 : fontSize + "px";
}
setRem();
window.onresize = function() {
  setRem();
};
