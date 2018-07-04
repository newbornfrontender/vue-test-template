'use strict'

import utils from '../modules/utils'

export default ({
  resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
      'assets': utils.join('./assets/'),
      'pages': utils.join('./src/pages/'),
      'static': utils.join('./static/'),
      'components': utils.join('./src/components/')
    }
  }
})
