const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
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
        { loader: 'css-modules-typescript-loader' },
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
      }],
    }),
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', 'scss'],
  },
};
