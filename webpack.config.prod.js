'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.assign({}, baseConfig);

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
