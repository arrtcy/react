import axios from "axios";
import { message } from "antd";
import { serverUrl, getToken } from "./tools";
const instance = axios.create({
  timeout: 5000,
  baseURL: serverUrl,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 此处需要根据实际情况来
    config.headers["authorization"] = "Bearer " + getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.dir(error);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status == 401) {
      message.error("用户登录数据异常，请重新登录");
      setTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload(); // 重新加载页面
      }, 2000);
    }
    return Promise.reject(error); 
  }
);

export const get = (url, params) => instance.get(url, { params });

export const post = (url, data) => instance.post(url, data);

export const put = (url, data) => instance.put(url, data);

export const del = (url) => instance.delete(url);
