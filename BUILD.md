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

## 第二阶段
> 明确当前是单页面应用，且不使用react, vue
1. 添加html插件
```
# 安装html插件，可以自动生成也可以使用模版
npm i html-webpack-plugin -D
```
2. 新增html模版，public/index.html
3. 配置webpack.config.js文件
```
...
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  plugins: [
    // 配置HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './public/index.html', // 模板文件
      filename: 'index.html', // 生成文件名
      inject: 'body', // 在哪个标签引入
    }),
  ]
};
```




