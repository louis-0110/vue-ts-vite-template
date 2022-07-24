/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:24:55
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-13 17:31:10
 * @FilePath: /vite-vue3-ts-pinia-pnpm-app/src/router/index.ts
 */
import { createRouter, createWebHashHistory, Router } from 'vue-router';
import routes from '@/router/routes';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
