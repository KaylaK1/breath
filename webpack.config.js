const prod = process.env.NODE_ENV === 'production';
// Generates index.html from our template
const HtmlWebpackPlugin = require('html-webpack-plugin');
// extracts styles to a seperate file instead of remaining in index.html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// webpack minifies the bundle in production mode
// entry: module that is executed after the app is loaded.
// module.rules: describes howto import different files to a bundle
// we use ts-loader and css-loader
// The test property says any files that match this type, use this loader.
// devtool: sets config for source maps
module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
