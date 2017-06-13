const webpack = require('webpack')
const express = require('express')
const R = require('ramda')
const path = require('path')
const dotenv = require('dotenv')
const Env = (envVars) => {
  const ENV_NAMES = {
    development: 'development',
    staging: 'staging',
    production: 'production',
  }
  const current = envVars.NODE_ENV || ENV_NAMES.development
  const envIs = (name) => {
    return (checkName = current) => {
      return name === checkName
    }
  }
  const isProduction = envIs(ENV_NAMES.production)
  const isStaging = envIs(ENV_NAMES.staging)
  const isDevelopment = envIs(ENV_NAMES.development)
  return R.merge(envVars, {
    current,
    isProduction,
    isStaging,
    isDevelopment
  })
}
dotenv.config()
const ENV = Env(process.env)
const app = express()
const port = process.env.PORT || 3000
if (ENV.isDevelopment()) {
  console.log('Loading development server configs')
  const webpackConfig = require('../../webpack-dev-server.config.js')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    contentBase: 'http://localhost:' + port,
    port: port,
    quiet: false,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    inline: true,
    lazy: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    stats: { colors: true }
  }
  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
  app.use(express.static('build'))
  app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../client/index.html')))
} else {
  app.get('*.js', function (req, res, next) {
    filename = req.url.replace(/\?.*$/, '')
    req.url = filename + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.use(express.static('public'));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../../public/index.html')))
}
app.listen(port, err => {
  if (err) throw err
  console.log(`App ${ENV.current} frontend listening on port ${port} ✨ ✨ 🌎 ✨ ✨`)
})
