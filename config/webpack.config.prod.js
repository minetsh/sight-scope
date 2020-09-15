const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'sightScope',
    libraryTarget: 'window',
    filename: 'sight-scope.min.js',
    path: path.resolve(__dirname, '../output'),
  },
  plugins: [new UglifyJsPlugin(), new BundleAnalyzerPlugin()],
};
