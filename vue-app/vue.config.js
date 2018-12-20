const path = require('path');

module.exports = {
  baseUrl: '/vue-app/',
  outputDir: path.resolve(__dirname, '../dist/vue-app'),
  configureWebpack: {
    // watch: true,
    output: {
      libraryExport: 'default',
      libraryTarget: 'amd',
      filename: 'bundle.js'    
    }
  },
};