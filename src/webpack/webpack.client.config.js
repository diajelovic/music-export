const webpack = require('webpack');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basedir = url => path.resolve(__dirname, '../../', url);

module.exports = (env = {}) => {
  // console.debug('---env', env);

  return {
    entry: basedir('src/client/index.js'),
    output: {
      path: basedir('dist/client'),
      filename: 'bundle.js',
    },

    mode: 'development',

    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.DefinePlugin({
        API: JSON.stringify('http://localhost:3000'),
      }),
      new MiniCssExtractPlugin({ filename: 'main.[chunkhash].css' }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: basedir('src/client/assets/index.html'),
      }),
    ],

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
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
              },
            },
            {
              loader: 'sass-loader',

              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: [basedir('node_modules')],
                },
              },
            },
          ],
        },
      ],
    },

    resolve: {
      alias: {
        auth: basedir('src/client/auth'),
        assets: basedir('src/client/assets'),
        controllers: basedir('src/client/controllers'),
        components: basedir('src/client/components'),
        stores: basedir('src/client/stores'),
        pages: basedir('src/client/pages'),
      },
      extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
    },

    optimization: {
      minimizer: [new TerserPlugin()],
    },

    devServer: {
      contentBase: basedir('dist/client'),
      disableHostCheck: true,
      historyApiFallback: true,
      compress: true,
      port: 4545,
      stats: 'errors-only',
    },
  };
};
