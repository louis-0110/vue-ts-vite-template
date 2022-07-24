/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:21:49
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-13 17:30:52
 * @FilePath: /vite-vue3-ts-pinia-pnpm-app/src/api/index.ts
 */
import axios from 'axios';

const request = axios.create();

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
