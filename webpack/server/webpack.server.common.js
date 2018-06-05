const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const parts = require('../parts');

const DEV_ENV = process.env.NODE_ENV === 'development';

const serverCommon = {
  name: 'server',
  target: 'node',
  entry: [
    path.join(__dirname, '../../src/server/router.js'),
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
}

module.exports = merge([
  serverCommon,
  parts.writeWebpackStats('stats.server.json'),
  parts.alias(),
  parts.loadImages({
    options: { limit: 40000, name: 'img/[name].[hash].[ext]' },
  }),
  parts.chunksCssLoader('server', !DEV_ENV),
]);
