const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssEcstractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin  = require('favicons-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    entry: {
        main: "./src/scripts/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssEcstractPlugin({
            filename: "[name].css"
        }),
        new FaviconsWebpackPlugin('./src/icons/portfolio_32.png'), 
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssEcstractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/, 
                use: [
                    MiniCssEcstractPlugin.loader, "css-loader",  "sass-loader"
                ]
            }
        ]
    }
}