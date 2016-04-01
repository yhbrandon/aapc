var fs = require('fs');
var path = require('path');
var dirs = require('./directories');
var runWebpackConfigs = require('webpack-meteor-tools/lib/runWebpackConfigs');

module.exports = function customRunWebpackConfigs(mode, callback) {
  var modeRx = new RegExp('\\.' + mode + '\\.js$');
  var configs = fs.readdirSync(dirs.webpack)
    .filter(modeRx.test.bind(modeRx))
    .map(function getPath(file) {
      return require(path.join(dirs.webpack, file));
    });
  return runWebpackConfigs(configs, callback);
};
