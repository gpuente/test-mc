const merge = require('webpack-merge');
const c = require('colors/safe');

const commonConfig = require('./webpack.server.common');
const devConfig = require('./webpack.server.dev');
const prodConfig = require('./webpack.server.prod');

module.exports = (env = process.env.NODE_ENV) => {
  console.log(c.yellow(`SERVER_BUILD_ENV: ${env}`));

  const envConfig = env === 'production' ? prodConfig : devConfig;
  const webpackConfig = merge(commonConfig, envConfig);

  // console.log(webpackConfig);
  
  return webpackConfig;
};