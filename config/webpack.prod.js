const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

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
        './Section': './src/components/Section/index.tsx',
      },
      remotes: {
        home: `home@${domain}/home/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}
