const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext]',
    },

    watch: true,
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    { loader: 'style-loader' },
                    // Translates CSS into CommonJS
                    { loader: 'css-loader' },
                    // Compiles Sass to CSS
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CopyPlugin({
            patterns: [{
                from: './public',
                noErrorOnMissing: true,
            }, ],
        }),
        // new ESLintPlugin.ESLintPlugin({
        //     extensions: ['js', 'jsx', 'ts', 'tsx'],
        // }),
        new CleanWebpackPlugin.CleanWebpackPlugin(),
    ],

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', 'scss'],
    },
};