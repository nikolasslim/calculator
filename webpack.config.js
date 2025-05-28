const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импорт HtmlWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Импорт MiniCssExtractPlugin
const TerserPlugin = require('terser-webpack-plugin'); // Импорт TerserPlugin

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
