import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      $src: path.resolve(__dirname, 'src'),
      hyperhtml: 'hyperhtml/esm',
    },
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};
