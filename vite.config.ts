/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:06:01
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-24 19:03:13
 * @FilePath: /vue-ts-vite-template-main/vite.config.ts
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },

  server: {
    // open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
});
