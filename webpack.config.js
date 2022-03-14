const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        bandle: "./src/entry.ts"
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist")
        },
        open: true,
        port: 3000
    },
    module: {
        rules: [
            {
                loader: "ts-loader",
                test: /\.ts$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}