const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const testPath = path.resolve(__dirname, 'test');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app/index.js'
  ],
  output: {
    path: '/',
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: [nodeModulesPath, testPath],
        use: [
          "eslint-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0', 'react-hmre']
          }
        },
      },
      {
        test: /\.css|scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'url-loader',
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules:  ['node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new TransferWebpackPlugin([ // moves files
      {from: 'client'},
    ], path.resolve(__dirname, 'src')),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
