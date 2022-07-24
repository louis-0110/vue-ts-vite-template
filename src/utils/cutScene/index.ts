/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-14 14:59:50
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-14 15:18:03
 * @FilePath: /vue-ts-vite-template-main/src/utils/cutScene/index.ts
 */

import { watch } from 'vue';
import { useRoute } from 'vue-router';

export default function cutScene() {
  interface RouteMeta {
    level?: number;
  }
  const route = useRoute();
  let transitionName = $ref('');

  watch(
    (): RouteMeta => route.meta,
    (newValue: RouteMeta, oldValue: RouteMeta) => {
      if (newValue.level && oldValue.level) {
        if (newValue.level > oldValue.level) {
          transitionName = 'slide-left';
        } else if (newValue.level < oldValue.level) {
          transitionName = 'slide-right';
        } else {
          transitionName = '';
        }
      }
    }
  );
  return $$({
    transitionName
  });
}
