var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var cssOutputFile = 'styles.css'

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
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {importLoaders: 1}},
            'postcss-loader',
            'sass-loader',
          ],
        })
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'raw-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
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
      }
    ]
  },
  output: {
    path: BUILD_DIR + "/assets/",
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new ExtractTextPlugin(cssOutputFile),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     screw_ie8: true,
    //     warnings: false
    //   },
    //
    //   sourceMap: false,
    //   sourceMap: true
    // }),
    new CopyWebpackPlugin([
      'src/index.html',
      {'from': 'src/images'},
    ])
  ]
};

module.exports = config;
