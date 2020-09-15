const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  mode: 'development',
  entry: path.join(__dirname, '../src/index.ts'),
  devServer: {
    port: 8008,
    progress: true,
    contentBase: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sight scope',
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'sightScope',
    libraryTarget: 'window',
    filename: 'sight-scope.js',
    path: path.resolve(__dirname, '../dist'),
  },
};
