var path = require('path');

module.exports = {
  context: __dirname,
  target: 'node',
  entry: [
    './lib/core-js-no-number',
    'regenerator/runtime',
    '../app/server',
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'server.bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.join(__dirname, '../app'),
    alias: {
      app: path.join(__dirname, '../app'),
    },
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel?stage=0',
      exclude: /node_modules|lib/,
    }, {
      test: /\.(css|scss)/,
      loader: 'style!css!sass',
    }],
  },
}
