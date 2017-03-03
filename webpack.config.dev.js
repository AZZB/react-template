'use strict';

var webpack = require('webpack');

var baseConfig = require('./webpack.config.base');

var config = Object.assign({}, baseConfig);

config.entry.push("webpack-hot-middleware/client?http://localhost:3000");

config['devtool'] = 'source-map';

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
);



module.exports = config;
