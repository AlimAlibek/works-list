const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssEcstractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin  = require('favicons-webpack-plugin');

const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {

    entry: {
        main: "./src/scripts/index.js",
        loadGifs: './src/scripts/load-gifs.js', 
        sw: './src/scripts/sw.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            title: "Works_list"
        }),
        new MiniCssEcstractPlugin({
            filename: "[name].css"
        }),
        new FaviconsWebpackPlugin('./src/icons/portfolio_32.png'), 

        new WebpackPwaManifest({
            name: "Progressive web application",
            short_name: "PWA",
            description: 'My awesome Progressive Web App!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials',
            icons: [
                {
                    src: "./src/icons/portfolio_256.png",
                    sizes: [144] 
                }
            ],
        },)
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
            },
        ]
    }
}