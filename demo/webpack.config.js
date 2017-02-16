const path = require('path')
const webpack = require("webpack");
const modulesDir = path.join(__dirname, '..', 'node_modules')

module.exports = {
  entry: path.join(__dirname, 'main.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8000,
    contentBase: __dirname
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'modal-vue': path.join(__dirname, '..', 'src'),
      'vue$': path.join(modulesDir, 'vue/dist/vue.common.js')
    }
  },
  resolveLoader: {
    modules: [
      modulesDir
    ]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}