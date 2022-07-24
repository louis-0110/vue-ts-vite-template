<!--
 * @Description: 
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:23:15
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-13 17:35:59
 * @FilePath: /vite-vue3-ts-pinia-pnpm-app/src/components/Layout.vue
-->
<template>
  <div class="layout-container">
    <div v-if="navbar" class="navbar">
      <slot name="navbar"> </slot>
    </div>

    <div v-if="content" class="content">
      <slot name="default"></slot>
    </div>

    <div v-if="footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
const { navbar, footer, default: content } = useSlots();
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navbar {
    flex: none;
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .footer {
    flex: none;
  }
}
</style>
