const webpack = require('webpack')
const path = require('path')
const root = path.resolve('./')

module.exports = {
  root: {
    path: root
  },
  target: 'web',
  entry: [root + '/app/index'],
  output: {
    path: root + '/dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, '..'),
    alias: {
      app: path.join(__dirname, '../app'),
    },
  },
  module: {
    loaders: [{
      test: /\.(css|scss)/,
      loader: 'style!css!sass',
    }],
  },
  plugins: [
    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment'),
  ],
}
