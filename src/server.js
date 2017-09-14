const express = require('express');
const webpack = require('webpack');
const webPackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.dev.js');
const compiler = webpack(config);

app.use(webPackDevMiddleware(compiler, {
  publicPath: config.devServer.publicPath
}));


app.listen(config.devServer.port, function(){
  console.log(`Dev server listening on port ${config.devServer.port}`);
})
