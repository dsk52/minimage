import webpack from 'webpack'
import path from 'path'
import config from './config'

module.exports = {
  entry: {
    application: path.join(__dirname, config.source.javascripts.path + config.source.javascripts.fileName),
    // lib: path.join(__dirname, config.source.javascripts.pathLib + config.source.javascripts.fileNameLib),
  },
  output: {
    path: path.join(__dirname, config.build.javascripts.path),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   jquery: 'jquery'
    // }),
    // new webpack.optimize.UglifyJsPlugin() // 圧縮処理
  ],
  // externals: {
  //   jquery: 'window.jQuery'
  // }
};
