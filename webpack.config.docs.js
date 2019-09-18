const path = require('path')
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
  mode: "production",
  entry: {
    example: './example.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  plugins: [...base.plugins, new HtmlWebpackPlugin({
    title: 'react component',
    template: 'index.html'
  })],
})