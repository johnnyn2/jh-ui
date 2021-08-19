const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './entry.js',
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }]
    },
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'jh.min.css',
        }),
    ],
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'jh.min.js'
    }
}