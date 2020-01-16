const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'bundle.js',
  },
  mode: 'development',

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[chunkhash].css' }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/assets/index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /.(js|jsx)$/,
        include: [],
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /.(scss|css)$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true,
              // modules: {
              //   localIdentName: '[local]_[hash:base64:5]',
              // },
            },
          },
          {
            loader: 'sass-loader',

            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       priority: -10,
    //       test: /[\\/]node_modules[\\/]/,
    //     },
    //   },
    //
    //   chunks: 'async',
    //   minChunks: 1,
    //   minSize: 30000,
    //   name: true,
    // },
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist/client'),
    compress: true,
    port: 4545,
  },
};
