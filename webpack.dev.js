const merge = require('webpack-merge-config');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
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

module.exports = merge(commonConfig, devConfig);
