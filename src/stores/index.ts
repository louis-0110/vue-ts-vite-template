/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:27:09
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-13 17:31:20
 * @FilePath: /vite-vue3-ts-pinia-pnpm-app/src/stores/index.ts
 */
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage
      }
    ]
  }
});
