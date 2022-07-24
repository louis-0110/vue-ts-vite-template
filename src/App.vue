<!--
 * @Description: 
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:17:48
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-14 17:17:12
 * @FilePath: /vue-ts-vite-template-main/src/App.vue
-->
<template>
  <router-view v-slot="{ Component }">
    <Transition :name="transitionName">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup lang="ts">
import banZoom from '@/utils/banZoom';
import cutScene from '@/utils/cutScene';
import touchBack from '@/utils/touchBack';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
// 取消多指默认事件
banZoom();

//app切换路由特效
let { transitionName } = cutScene();

// 滑动返回上一页面
const excludesRoutes = ['Home'];
const touchBackCb = () => {
  let routeName = (route.name as string) || '';
  if (excludesRoutes.includes(routeName)) return;
  router.back();
};
touchBack('app', touchBackCb);
</script>

<style lang="less">
@import '@/utils/cutScene/';
#app {
  width: 100%;
  height: 100%;
}
</style>
