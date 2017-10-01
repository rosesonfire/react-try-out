"use strict";

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackOnBuildPlugin = require('on-build-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const { exec } = require('child_process');

module.exports = {
    entry: {
        script: "./customization/scripts/script.js",
        style: "./customization/style/style.css",
        app: "./dist/main/front-end/views/app.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ])
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name].min.css"),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'customization/index.html',
            excludeAssets: [/style.*js/]
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new WebpackOnBuildPlugin(function(stats) {
            exec("npm run webpack-remove-extra-js")
        }),
    ]
};