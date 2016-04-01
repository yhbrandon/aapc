require('shelljs/global');

var dirs = require('./directories');

require('./core-js-custom-build');

require('./webpackConfigs')('development', function(err) {
  if (err) throw err;
  cd(dirs.meteor);
  exec('meteor --settings ../config/development.json', {
    async: true,
  });
});
