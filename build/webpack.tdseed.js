const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.tdseed.default.js');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const utils = require('./utils')

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: false,
            usePostCSS: true
        })
    },
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'tdseed.js',
        library: 'tdseed',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        iview: {
            root: 'iview',
            commonjs: 'iview',
            commonjs2: 'iview',
            amd: 'iview'
        },
        lodash: {
            root: '_',
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    stats: {
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
});
