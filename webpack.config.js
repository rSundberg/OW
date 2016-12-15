'use strict'

const webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname + '/app',
  entry: {
    home: "./templates/home.jsx",
    shop: "./templates/shop.jsx"
  },
  output: {
    path: __dirname + "/dist/assets",
    publicPath: "/assets/",
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/app",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: "babel-loader"
        }],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {loader: "css-loader", options: {modules: true}}
        ],
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve('./re-base'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      minChunks: 2,
    }),
  ]
}
