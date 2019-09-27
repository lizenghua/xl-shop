/*
 * @message: axios封装
 * @Author: lzh
 * @since: 2019-09-25 18:49:33
 * @lastTime: 2019-09-26 11:20:55
 * @LastAuthor: Do not edit
 * @copyright: lizenghua
 */
import axios from "axios";
import QS from "qs"; // 序列化post类型的数据
// import { Toast } from "vant";
// import router from "../router";

/**
 * @description: 提示函数 （禁止点击蒙层，显示一秒后关闭）
 * @param {String} msg 【提示文本】
 */
// const tip = msg => {
//   Toast({
//     message: msg,
//     duration: 1000,
//     forbidClick: true
//   });
// };

/**
 * @description: 跳转登录页 (携带当前页面路由，以及在登录页面完成登录后返回当前页面)
 */
// const toLogin = () => {
//   router.replace({
//     path: "/login",
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   });
// };

/**
 * @description: 请求失败后的错误统一处理
 * @param {Number} status 【请求失败的状态码】
 * @param {String} msg 【请求失败时携带的错误文本信息】
 */
// const errorHandle = (status, msg) => {
//   switch (status) {
//     case 404:
//       tip("请求的资源不存在");
//       break;

//     default:
//       console.log(msg);
//       break;
//   }
// };

// 设置请求超时
axios.defaults.timeout = 1000 * 12;
// 设置post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // Do something before response is sent
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

/**
 * @description: 请求方法封装
 * @param {String} url 【请求的url地址，默认空字符串】
 * @param {Object} params 【请求时携带的参数，默认空对象】
 * @param {String} type 【请求方法，默认get请求】
 * @return: 【Promise对象】
 */
export function $axios(url = "", params = {}, type = "GET") {
  let promise;
  return new Promise((resolve, reject) => {
    if (type.toUpperCase() === "GET") {
      promise = axios.get(url, { params: params });
    } else if (type.toUpperCase() === "POST") {
      promise = axios.post(url, QS.stringify(params));
    }
    promise
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
