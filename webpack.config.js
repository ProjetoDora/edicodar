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
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },
  devServer: {
    hot: true,
    publicPath: 'http://localhost:8080/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  entry: {
    app: ['webpack/hot/dev-server', './src/index.js']
  },
  debug: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
