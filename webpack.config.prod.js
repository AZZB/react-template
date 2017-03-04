'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseConfig = require('./webpack.config.base');

var config = Object.assign({}, baseConfig); // clone of  base config



config['output'].filename = 'bundle.[hash:12].min.js';

// css loaders
config['module'].rules[1].use = ExtractTextPlugin.extract({
  use: [
    {
      loader: 'css-loader',
      options: {
        localIdentName: '[hash:base64:10]',
        importLoaders: 1,
      }
    },
    'postcss-loader',
    'sass-loader'
  ]
});


// production plugins
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new ExtractTextPlugin('style-[contenthash:10].css'),
  new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
