const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        bandle: './src/entry.tsx',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        open: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.(tsx|ts)$/,
            },
            {
                loader: 'file-loader',
                test: /\.(gif|png|jpg)$/i,
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}
