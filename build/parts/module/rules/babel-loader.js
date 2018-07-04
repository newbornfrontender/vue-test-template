'use strict'

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        // test,
        test: test || '',
        // include,
        // exclude,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false // ?
          }
        }
      }
    ]
  }
})
