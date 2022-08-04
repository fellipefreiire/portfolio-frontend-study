// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    hot: true,
    port: 8082,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'study',
      filename: 'remoteEntry.js',
      exposes: {
        './StudyApp': './src/bootstrap',
        './Section': './src/components/Section/index.tsx',
      },
      shared: packageJson.dependencies,
    }),
    // new ReactRefreshWebpackPlugin(),
  ],
}
