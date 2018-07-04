'use strict'

const key = {
  optimization: {
    preset: true
  }
}

const presetOptimiz = ({
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
})

const defaultOptimiz = ({ name, filename } = {}) => ({
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name,
          filename,
          chunks: 'all'
        }
      }
    }
  }
})

export default key.optimization.preset ? presetOptimiz : defaultOptimiz
