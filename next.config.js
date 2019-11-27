const withCss = require('@zeit/next-css')

const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withCss({

  env: {
    'API_TARGET': process.env.API_TARGET
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]'
        }
      }
    })

    return config
  }
}))
