/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-14 15:20:45
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-14 16:32:54
 * @FilePath: /vue-ts-vite-template-main/src/utils/touchBack.ts

 */
/**
 *  用来检测左右滑动距离，然后执行回调
 * @param {string} id 元素Id
 * @param {fn} callback 回调函数
 * @param {number} num 滑动距离 默认200
 */
import { onMounted } from 'vue';
export default function (id: string, callback?: () => void, num = 100): void {
  let start = 0;
  let curPoint = 0;
  const bandTouchmove = (e: TouchEvent) => {
    curPoint = e.touches[0].clientX;
  };
  onMounted(() => {
    const app = document.getElementById(id);
    if (app) {
      //绑定事件
      app.addEventListener('touchstart', (e) => {
        start = e.touches[0].clientX;
        app.addEventListener('touchmove', bandTouchmove);
      });

      app.addEventListener('touchend', () => {
        if (curPoint - start > num && start <= 100 && start !== 0) {
          callback && callback();
          app.removeEventListener('touchmove', bandTouchmove);
        }
        start = 0;
        curPoint = 0;
      });
    } else {
      throw new Error('app is not defined');
    }
  });
}
