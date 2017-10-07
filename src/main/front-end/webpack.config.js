"use strict";

import webpack from 'webpack';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import WebpackOnBuildPlugin from 'on-build-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackExcludeAssetsPlugin from 'html-webpack-exclude-assets-plugin';
import { exec } from 'child_process';

const scripts = "./scripts/script.js";
const styles = "./styles/style.css";
const app = "./app.js";
const outputPath = __dirname + "/public";

module.exports = {
    entry: {
        scripts: scripts,
        styles: styles,
        app: app
    },
    output: {
        path: outputPath,
        filename: "[name].min.js"
    },
    module: {
        rules: [
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
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name].min.css"),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./index.html",
            excludeAssets: [/styles.*js/]
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new WebpackOnBuildPlugin(function(stats) {
            exec("rm -rf " + outputPath + "/styles.min.js")
        })
    ],
    devServer: {
        port: 8090,
        inline: true,
        open: true,
        proxy: {
            "*" : "http://localhost:8080"
        }
    }
};