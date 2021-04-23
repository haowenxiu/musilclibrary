/* 引入需要的文件 */
import axios from "axios"; //引入axios
// import { reject, resolve } from "core-js/fn/promise";
import QS from "qs"; //引入qs模块，用来序列化post类型的数据
// import { Toast } from "vant"; //

/* 环境的切换 */
if (process.env.NODE_ENV == "development") {
  //如果是开发环境下
  axios.defaults.baseURL = "https://autumnfish.cn";
} else if (process.env.NODE_ENV == "debug") {
  //如果是debug环境下
  axios.defaults.baseURL = "https://autumnfish.cn";
} else if (process.env.NODE_ENV == "production") {
  //如果是发布环境下
  axios.defaults.baseURL = "https://www.production.com";
}
// const instance=axios.cr

/* 设置请求超时 */
axios.defaults.timeout = 10000;

/* post请求头的设置 */
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-from-urllencoded:charset=UTF-8";

/* 请求拦截 */

/* 响应拦截 */

/* 封装get和post方法 */
/*
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *
 */

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/*
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
