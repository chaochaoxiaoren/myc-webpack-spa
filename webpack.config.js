const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 表示需要先经过多少loader的处理
                                // https://webpack.docschina.org/loaders/css-loader/#importloaders 
                                // 0 => no loaders (default);
                                // 1 => postcss-loader;
            },
          },
          'postcss-loader', // 和autoprefix 配合做css兼容处理
        ],
      },
    ],
  },
  plugins: [
    // 配置HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './public/index.html', // 模板文件
      filename: 'index.html', // 生成文件名
      inject: 'body', // 在哪个标签引入
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ]
};