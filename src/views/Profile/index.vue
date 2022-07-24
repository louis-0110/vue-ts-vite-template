<!--
 * @Description: 
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-22 21:47:03
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-23 00:12:28
 * @FilePath: /vue-ts-vite-template-main/src/views/Profile/index.vue
-->
<template>
  <Layout>
    <template #navbar>
      <van-nav-bar title="Profile" />
    </template>
    <Button type="default" to="/login">登陆</Button>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue';
import { Button } from 'vant';
</script>

<style scoped></style>
