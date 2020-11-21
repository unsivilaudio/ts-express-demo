const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge-config');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    watch: true,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            soureMap: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
};

module.exports = merge(commonConfig, prodConfig);
