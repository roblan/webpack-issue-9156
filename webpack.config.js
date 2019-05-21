const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    node: false,
};

module.exports = config;
