var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
    APP_DIR + '/index.js',
  ],
  module : {
    rules : [
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader/webpack'],
        include: APP_DIR,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        include: APP_DIR,
      },
      {
        test : /\.js?/,
        include : APP_DIR,
        use : [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        use: [{
          loader: 'file-loader',

          options: {
            mimetype: 'image/svg+xml'
          }
        }]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
        use: [{
          loader: 'file-loader',

          options: {
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
        use: [{
          loader: 'file-loader',

          options: {
            mimetype: 'application/font-woff'
          }
        }]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        use: [{
          loader: 'file-loader',

          options: {
            mimetype: 'application/octet-stream'
          }
        }]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        use: [{
          loader: 'file-loader'
        }]
      },
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      'src/index.html',
    ])
  ]
};

module.exports = config;
