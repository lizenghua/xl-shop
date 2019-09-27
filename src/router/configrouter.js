/*
 * @message: 路由配置
 * @Author: lzh
 * @since: 2019-09-25 17:04:57
 * @lastTime: 2019-09-25 19:30:48
 * @LastAuthor: Do not edit
 * @copyright: youai
 */
export const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Home")
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/views/category/Category")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/cart/Cart")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/Mine")
  }
];
