import path from 'path';
/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import PlayCanvasWebpackPlugin from 'playcanvas-webpack-plugin';
import configuration from './config.json';

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].build.js',
  },
  plugins: [
    new PlayCanvasWebpackPlugin({
      skipUpload: process.env.UPLOAD === 'no'
       || !configuration.bearer
       || configuration.bearer.length !== 32,
      bearer: configuration.bearer,
      project: configuration.projectId,
      files: configuration.files || {
        'main.build.js': {
          path: 'main.build.js',
          assetId: configuration.assetId,
        },
      },
    }),
  ],
  devtool: '#inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    overlay: true,
    inline: true,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
       'X-Requested-With, content-type, Authorization',
    },
  },
  module: {
    rules: [],
  },
};
