/*
 * @Description:
 * @Version: 1.0
 * @Author: gaoluo
 * @Date: 2022-07-13 17:38:37
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-07-23 10:38:59
 * @FilePath: /vue-ts-vite-template-main/lint-staged.config.js
 */
module.exports = {
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json'
  ],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.vue': ['prettier --write', 'eslint --fix'],
  '*.{scss,less,styl,css,html}': ['prettier --write']
};
