const opn = require('opn')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const util = require('util')

const DEV = process.env.NODE_ENV === 'development'
const port = DEV ? 3000 : process.env.PORT
const host = 'localhost'


if (DEV) {
  const config = require('../config/webpack-dev-server.config')
  const server = new WebpackDevServer(
    webpack(config),
    config.devServer
  )
}

server.use('*', function(req, res) {
  res.sendFile(config.root.path + '/app/index.html')
})

server.listen(port, host, function (err) {
  if (err) { console.log(err) }
  var url = util.format('http://%s:%d', host, port)
  console.log('Listening at %s', url)
  opn(url)
})
