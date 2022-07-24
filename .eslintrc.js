/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:38:37
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-23 00:10:55
 * @FilePath: /vue-ts-vite-template-main/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/no-setup-props-destructure': 0,
    'vue/multi-word-component-names': 0,
    'no-var': 2, //禁止var
    'no-unused-vars': 2, // 禁止声明变量未使用
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: true
      }
    ]
  },
  globals: {
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $computed: 'readonly'
  }
};
