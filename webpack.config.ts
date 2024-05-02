import webpack from 'webpack';

import 'webpack-dev-server';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = ({ mode }: { mode: 'development' | 'production' | 'none' }) => {
  const isDev = mode === 'development';

  const config: webpack.Configuration = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'source-map',
    cache: true,
    mode,
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `[name].[contenthash].js`,
      chunkFilename: `[name].[contenthash].js`,
      publicPath: mode === 'development' ? '/' : '/olfs-frontend/'
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      },
      proxy: {
        '/msna-gateway/*': {
          target: 'https://ifmobile.atb.su/msna-gateway',
          changeOrigin: true,
          secure: false,
          prependPath: false
        }
      },
      allowedHosts: 'all',
      static: {
        directory: path.join(__dirname, 'src')
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        inject: true
      }),

      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
      new Dotenv(),
      isDev &&
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            diagnosticOptions: {
              semantic: true,
              syntactic: true
            },
            mode: 'write-references'
          }
        }),
      isDev && new ReactRefreshWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(s?)css$/,
          exclude: /node_modules/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack', 'url-loader']
        },
        {
          test: /\.(gif|jpe?g|png|woff2|woff|pdf)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        esmodules: true
                      }
                    }
                  ]
                ]
              }
            }
          ]
        }
        // {
        //   test: /\.(js|jsx|ts|tsx)?$/,
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: 'babel-loader',
        //       options: {
        //         presets: [
        //           [
        //             '@babel/preset-env',
        //             {
        //               targets: {
        //                 esmodules: true
        //               }
        //             }
        //           ]
        //         ]
        //       }
        //     }
        //   ]
        // }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    target: 'web'
  };

  return config;
};
