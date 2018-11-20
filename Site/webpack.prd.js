const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const shell = require("shelljs");
const common = require('./webpack.common.js');

const config = {
    module: {
        rules: [
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            optimizationLevel: 7,
                            interlaced: true,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            mozjpeg: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'), // process.env.NODE_ENV
                'APP_ENV': JSON.stringify('browser')
            }
        })
    ]
};

module.exports = merge(common, config);