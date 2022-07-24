/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:18:52
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-18 19:26:13
 * @FilePath: /vue-ts-vite-template-main/src/main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import '@/style/reset.less';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);
app.mount('#app');
