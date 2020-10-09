'use strict'

const { join } = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': join(__dirname, 'src', 'components'),
        'utils': join(__dirname, 'src', 'utils')
      }
    }
  }
}
