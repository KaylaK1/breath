const path = require('path');
// Generates index.html from our template
const HtmlWebpackPlugin = require('html-webpack-plugin');
// extracts styles to a seperate file instead of remaining in index.html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

// webpack minifies the bundle in production mode
// entry: module that is executed after the app is loaded.
// module.rules: describes howto import different files to a bundle
// we use ts-loader and css-loader
// The test property says any files that match this type, use this loader.
// devtool: sets config for source maps
module.exports = {
	mode: 'development',
  entry: './src/index.tsx',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
  },
	plugins: [
		new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      alwaysWriteToDisk: true,
    }),
    new MiniCssExtractPlugin(),
	],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
        test: /\.css$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
