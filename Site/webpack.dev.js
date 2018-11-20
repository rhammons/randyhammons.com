const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const shell = require("shelljs");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
})

const config = {
    module: {
        rules: [
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loaders: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'), // process.env.NODE_ENV
                'APP_ENV': JSON.stringify('browser')
            }
        })
    ]
};

module.exports = merge(common, config);