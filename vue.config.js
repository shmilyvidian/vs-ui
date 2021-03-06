const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    },

    resolve: {
      alias: {
        // '@': resolve('examples'),
        // 'packages': resolve('packages'),
        // 'utils': resolve('utils')
      }
    },

    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
      // new BundleAnalyzerPlugin({ analyzerPort: 8920 })
    ]
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('packages', resolve('packages'))
      .set('examples', resolve('examples'))
      .set('images', resolve('packages/images'))
      .set('utils', path.resolve(__dirname, './utils'))

    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
   
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('./build/md-loader/index.js')
      .loader('./build/md-loader/index.js')

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 500000, esModule: false }))
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
