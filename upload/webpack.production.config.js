const path = require('path');
const PlayCanvasWebpackPlugin = require('playcanvas-webpack-plugin');
const configuration = require('./config.json');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js'
    },
    plugins: [
        new PlayCanvasWebpackPlugin({
            skipUpload: process.env.UPLOAD === "no" || !configuration.bearer || configuration.bearer.length != 32,
            bearer: configuration.bearer,
            project: configuration.projectId,
            files: configuration.files || {
                "main.build.js": {path: "main.build.js", assetId: configuration.assetId}
            }
        })
    ],
    devtool: 'source-map',
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};

