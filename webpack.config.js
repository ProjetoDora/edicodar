'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

let options = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'jsx-loader',
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
  entry: [
    './src/index'
  ],
  debug: true
};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
