/* 引入需要的文件 */
import axios from "axios"; //引入axios
// import { reject, resolve } from "core-js/fn/promise";
import QS from "qs"; //引入qs模块，用来序列化post类型的数据
// import { Toast } from "vant"; //
const USER_KEY = "hm-toutiao-m-user";
/* 环境的切换 */
if (process.env.NODE_ENV == "development") {
  //如果是开发环境下  http://localhost/Music_Library
  // axios.defaults.baseURL = "https://autumnfish.cn";
  axios.defaults.baseURL = "http://localhost:80";
} else if (process.env.NODE_ENV == "debug") {
  //如果是debug环境下
  axios.defaults.baseURL = "http://localhost:80";
  // axios.defaults.baseURL = "https://autumnfish.cn";
} else if (process.env.NODE_ENV == "production") {
  //如果是发布环境下
  axios.defaults.baseURL = "http://localhost:80";
}

// const instance=axios.cr

/* 设置请求超时 */
axios.defaults.timeout = 10000;

// 跨域是否允许携带凭证
axios.defaults.withCredentials = false;

/* post请求头的设置 */
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-from-urllencoded:charset=UTF-8";
axios.defaults.transformRequest = params => QS.stringify(params);

/**
 * 请求拦截
 * TOKEN校验(JWT):接受服务器返回的token，存储到vuex/本地存储，
 * 每一次向服务器发送请求都应该吧token带上
 *
 */
axios.interceptors.request.use(
  config => {
    let token = JSON.parse(localStorage.getItem(USER_KEY)).token;
    if (token) {
      config.headers["token"] =token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/* axios.defaults.validateStatus = status => {
  return /^(2|3)\d{2}$/.test(status);
};

/* 响应拦截 */
const that = this;
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
    // let { response } = error;
    // if (response) {
    //   switch (response.status) {
    //     case 401:
    //       break;
    //     case 403:
    //       localStorage.removeItem("accesstoken");
    //       localStorage.removeItem("refreshtoken");
    //       break;
    //   }
    //   return Promise.reject(response);
    // } else {
    //   // 服务器什么都没有返回
    //   if (window.navigator.onLine) {
    //     //断网 : 跳转到断网页面
    //     return;
    //   }
    //   return Promise.reject(error);
    // }
  }
);

/* 封装get和post方法 */
/*
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 *
 */

export function get(url, params) {
  console.log(url);
  console.log(params);
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(res => {
        resolve(res);
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
