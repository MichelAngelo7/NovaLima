const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry:{
    index: './src/js/principal.js',
    vereadores: './src/js/dadosVereadores.js',
    tramitacaoDeProjetos: './src/js/tramitacaoDeProjetos.js'
  },
  output: {
    filename: '[name].[hash:20].js',
    path: __dirname + '/public'
  },
  devServer:{
    contentBase: "./public",
    port: 9000,
  },
  optimization:{
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
      new OptimizeCSSAssetsPlugin({})

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/vereadores.html',
      inject: true,
      chunks: ['vereadores'],
      filename: 'vereadores.html'
  }),
  new HtmlWebpackPlugin({
    template: './src/tramitacaoDeProjetos.html',
    inject: true,
    chunks: ['tramitacaoDeProjetos'],
    filename: 'tramitacaoDeProjetos.html'
}),
     new MiniCssExtractPlugin({
       filename: "[name].[contenthash].css",
       chunkFilename: "[id].[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',//interpretar @import, url()....
          //'style-loader',
          'sass-loader',
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']

      }]
  }
}