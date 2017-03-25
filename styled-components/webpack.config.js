const webpack = require('webpack');
const path = require('path');
const distPath = path.resolve(__dirname, './dist');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/src/index.jsx'),
  ],
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: __dirname,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

