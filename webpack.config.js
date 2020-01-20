const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {

    mode: 'development',
    entry: {
      mern: "./app/index-mern.js",
      //"clientlib.all": "./app/Clientlibs/ClientlibAll.js"
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([
        {from: 'public/index.html', to: 'index.html'},
        {from: `public/images/`, to: 'images/'},
        {from: 'public/fonts/', to: 'fonts/'},
        {from: 'public/scripts/', to: 'scripts/'},

      ]),
      new MiniCssExtractPlugin({filename: `[name].css`}),
      new WriteFilePlugin(),
    ],
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ]
      },
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.html/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' }
      },
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: { name: 'images/[name].[ext]' }
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.json', '.less'] },
  devServer: {
    port: 8080,
    host: "127.0.0.1",
    stats: 'minimal',
    open: true,
    overlay: true,
  }

};