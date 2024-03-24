# 单页面应用
基本的本地开发架构已经完成，但还有很多问题，接下来一一解决
## 第一阶段
区分环境，根据不同的环境使用不同的配置文件
1. 安装webpack-merge，并将配置文件根据环境变量使用
```
npm i webpack-merge -D
```
2. 拆分webpack.config.js，将配置文件根据环境env使用

