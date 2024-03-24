# 单页面应用

## 第一阶段搭建过程
1. 项目初始化
```
git init
git remote add origin https://github.com/chaochaoxiaoren/myc-webpack-spa.git
npm init -y
```
2. 安装webpack
```
npm i webpack webpack-cli -D
```
3. 添加webpack.config.js文件
```
// 基本配置
// 会把项目目录下的index.js 打包成 dist/index.bundle.js
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
4. package.json配置script
```
{
  ...
  "scripts": {
    "build": "webpack"
  },
}
```

