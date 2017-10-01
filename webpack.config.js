const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackOnBuildPlugin = require('on-build-webpack');
const { exec } = require('child_process');

module.exports = {
    entry: {
        scripts: "./customization/scripts/script.js",
        styles: "./customization/style/style.css"
    },
    output: {
        path: __dirname + "/public",
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
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin("[name].min.css"),
        new WebpackOnBuildPlugin(function(stats) {
            exec("npm run webpack-remove-extra-js")
        })
    ]
};