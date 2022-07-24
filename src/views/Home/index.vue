<!--
 * @Description: 
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:27:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-22 22:33:58
 * @FilePath: /vue-ts-vite-template-main/src/views/Home/index.vue
-->
<template>
  <Layout>
    <router-view></router-view>
    <template #footer>
      <van-tabbar v-model="active" placeholder route>
        <van-tabbar-item icon="home-o" to="/home/work"> HOME </van-tabbar-item>
        <van-tabbar-item icon="search" to="/home/task"> Task </van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/home/message">
          MESSAGES
        </van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/home/profile">
          PROFILE
        </van-tabbar-item>
      </van-tabbar>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue';

const active = $ref(0);
</script>

<style scoped></style>
