const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',
    entry: {
      mern: "./app/index-mern.js"
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',                              //[name] take a entry name "mern"
      publicPath: '/'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),                   //clean the folder "dist" in the tree
      new CopyWebpackPlugin([
        {from: 'public/index.html', to: 'index.html'},
        {from: `public/images/`, to: 'images/'},
        {from: 'public/fonts/', to: 'fonts/'},
        {from: 'public/scripts/', to: 'scripts/'},

      ]),
      new MiniCssExtractPlugin({filename: `[name].css`}),
      new WriteFilePlugin(),                             //add the folder "dist" in the tree
    ],
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          },
          {
              test: /\.html$/,
              use: [
                  {
                      loader: "html-loader"
                  }
              ]
          }
      ]
  },
  resolve: { extensions: ['.js', '.jsx', '.json', '.less'] },
  devServer: {
    port: 8005,
    host: "localhost",
    stats: 'minimal',
    open: true,
    overlay: true,
  }

};