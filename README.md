# 项目搭建

1. vue3
2. vite
3. vant
4. pinia
5. typeScript
6. pnpm

### 构建项目

1. 初始化项目

```shell
pnpm create vite 项目名称 -- --template vue-ts
```

2. 安装 vant

```shell
pnpm add vant
```

3. 配置按需加载

安装插件

```shell
pnpm add unplugin-vue-components -D
```

```ts
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
};
```

4. 配置别名 alias
   -vite.config.ts

```ts
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      assets: resolve(__dirname, 'src/assets')
    }
  }
});
```

5. 移动端适配 viewport

```shell
pnpm add  postcss-px-to-viewport-8-plugin -D
```

配置 postcss.config.ts

```ts
export default {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 375, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      // selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      // exclude: [/node_modules/, /ignore/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    }
  }
};
```

> tips: postcss ts 用的 module 是 CommonJS，如果你本地用的 node 的话编译是会出错 export 无法识别,并也要下载 ts-node 作为开发
> 依赖。如果不想修改 moudule 可以直接使用 postcss.config.js 或者 配置 tsconfig.json 中的`"isolatedModules": false`

### husky 和 lint-staged 代码提交 hooks

```shell
npx husky add .husky/pre-commit 'npx lint-staged'
```
