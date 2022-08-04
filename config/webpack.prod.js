const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/study/latest/',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'study',
      filename: 'remoteEntry.js',
      exposes: {
        './StudyApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}
