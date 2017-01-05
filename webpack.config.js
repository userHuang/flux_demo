var path = require('path');
var webpack = require('webpack');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        dev: [
            'webpack/hot/only-dev-server',
            // 'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, './index.jsx')
        ],
        dist: [
            path.resolve(__dirname, './index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        // filename: '[name].bundle.js',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders:[
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
            { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.html$/, loader: 'raw' }
        ]
    },
    plugins: [
        // new CommonsChunkPlugin('init.js'),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};
