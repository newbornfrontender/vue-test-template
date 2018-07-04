'use strict'

export default ({} = {}) => ({
  ejsLoader: {
    variable: 'data',
    interpolate: /\{\{(.+?)\}\}/g,
    evaluate: /\[\[(.+?)\]\]/g
  }
})
