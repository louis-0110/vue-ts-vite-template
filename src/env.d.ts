/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:19:10
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-22 22:28:26
 * @FilePath: /vue-ts-vite-template-main/src/env.d.ts
 */

/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

// interface ImportMetaEnv {
//   readonly VITE_APP_TITLE: string
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv
// }

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
