const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const pathCurry = relPath => path.resolve(__dirname, relPath);

module.exports = merge(common, {
  output: {
    path: pathCurry('dev'),
    filename: './scripts/index.js',
    publicPath:''
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dev',
    port:3000,
    historyApiFallback: true,
    hot: true,
    // publicPath:"./dev/"
  }
})