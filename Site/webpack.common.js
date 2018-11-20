const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const config = {
    context: path.resolve(__dirname, './src'),
    entry: {
        rh: './index.js'
            // additionalEntryName: './example.js'
    },
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/'),
        publicPath: 'http://localhost:8080/dist/', //		'/assets/',
        hotUpdateChunkFilename: '[id].[hash].hot-update.js',
        pathinfo: true
    },
    target: 'web',
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].bundle.css',
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackMd5Hash()
    ],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env' /*, { modules: false }*/ ]
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.s[c|a]ss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        noquotes: false,
                        limit: 100000
                    }
                }
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/', // where the fonts will go
                        publicPath: '../dist/assets/' // override the default path
                    }
                }]
            },
            {
                test: require.resolve('snapsvg/dist/snap.svg.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0',
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, './dist'),
            'node_modules'
        ],
        alias: {
            snapsvg: 'snapsvg/dist/snap.svg.js',
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true
    }
};

module.exports = config;