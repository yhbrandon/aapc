const lodash = require('lodash')
const webpack = require('webpack')
const path = require('path')
const config = require('./webpack-config')

module.exports = lodash.assign(lodash.clone(config), {
  cache: true,
  debug: true,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ].concat(config.entry),
  module: {
   loaders: (config.module.loaders || []).concat([{
     test: /\.jsx?$/,
     loader: 'babel',
     exclude: /node_modules|lib/,
     query: {
       stage: 0,
       cacheDirectory: true,
       plugins: [
         'react-transform',
       ],
       extra: {
         'react-transform': {
           transforms: [{
             transform: 'react-transform-hmr',
             imports: ['react'],
             locals: ['module'],
           },
           {
             transform: 'react-transform-catch-errors',
             imports: ['react', 'redbox-react'],
           }],
         },
       },
     },
   }]),
  },
  plugins: (config.plugins || []).concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]),
  devServer: {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true
  }
})
