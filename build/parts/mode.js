'use strict'

const env = process.env.NODE_ENV

export default ({
  mode: env || 'development'
})
