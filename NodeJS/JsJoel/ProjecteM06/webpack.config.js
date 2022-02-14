const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require('webpack');

module.exports = {
    
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    // minimize: true,
                    sources: false
                }

            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // Para que cargue imagen como logo v1.0
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         name: 'img/[name].[ext]'
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets", to: "./assets"}
            ]
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            JQuery:'jquery'
        })
    ]
}