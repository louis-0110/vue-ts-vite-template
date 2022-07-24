/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-14 14:43:56
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-14 14:49:22
 * @FilePath: /vue-ts-vite-template-main/src/utils/banZoom.ts
 */

export default function () {
  document.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
}
