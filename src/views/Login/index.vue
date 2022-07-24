<!--
 * @Description: 
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-14 17:41:39
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-23 00:12:39
 * @FilePath: /vue-ts-vite-template-main/src/views/Login/index.vue
-->
<template>
  <div class="login-container">
    <VanCellGroup inset>
      <VanField
        v-model="userName"
        placeholder="请输入用户名"
        label="用户名"
        type="text"
        maxlength="12"
      ></VanField>
      <VanField
        v-model="pwd"
        placeholder="请输入密码"
        label="密码"
        type="password"
        maxlength="12"
      ></VanField>
      <VanButton type="default" @click="onHanleLogin"> 登陆 </VanButton>
    </VanCellGroup>
  </div>
</template>

<script setup lang="ts">
// import { Toast } from 'vant';

let userName = $ref('');
let pwd = $ref('');

const onHanleLogin = () => {
  console.log('登陆');
};
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .van-cell-group {
    width: 80%;
    background-color: antiquewhite;
    box-shadow: 0 0 10px 0 rgb(214, 212, 212);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
  .van-button {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
