const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// tell express to use webpack-dev-middleware and use
// the webpackconfig as a base
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// serve the files on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

export {};
