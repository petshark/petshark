const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg)$/i,
                type: 'asset/resource',
            }
        ],
    },
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src", "components"),
            "@pages": path.resolve(__dirname, "src", "pages"),
            "@styles": path.resolve(__dirname, "src", "scss")
        }
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        liveReload: true,
        port: 5000,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: path.resolve(__dirname, "public", "favicon.ico")
        }),
        // new CopyPlugin({
        //     // patterns: [
        //     // {
        //     // from: path.join(__dirname, "src", "..."),
        //     // to: path.join(__dirname, "build")
        //     // }
        //     // ],
        // })
    ],
};