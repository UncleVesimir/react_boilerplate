const path = require('path');
const components = "src/components/";
const pathCurry = relPath => path.resolve(__dirname, relPath);
const pathComponent = relPath => path.resolve(__dirname, components, relPath);
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebPackPlugin(['dev']),
    new ExtractTextPlugin('./style/style.css'),
    new HtmlWebPackPlugin({
      inject: false,
      filename: 'index.html',
      template: HtmlWebpackTemplate,

      //HTML Webpack Template options

      appMountId: 'app',
      mobile: true,
      title: 'Default App Template - CHANGE ME IN WEBPACK COMMON CONFIG',
      links: [{
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        type: 'text/css'
      }
      ],
    }),
    new Dotenv(
      {
        path: './.env',
        safe: false
      }
    )
  ],

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
        
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      App$: pathComponent('App'),
      //examples of aliases
      SearchBar$: pathComponent('SearchBar'),
      VideoDetail$: pathComponent('VideoDetail'),
      VideoList$: pathComponent('VideoList'),
      VideoListItem$: pathComponent('VideoListItem'),
    }
  },
  node: {
    fs: "empty" //required for dotenv issue
  }
};
