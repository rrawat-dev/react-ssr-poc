// next.config.js
const withOffline = require('next-offline')

module.exports = withOffline({
  devSwSrc: 'service-worker.js'
})