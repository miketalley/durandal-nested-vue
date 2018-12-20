const path = require('path');

module.exports = function(grunt) {
  grunt.registerTask('vue-webpack', 'Run webpack build for Vue app', () => {
    const exec = require('child_process').exec;
  
    // TODO -- Figure out how to get the production build to work with durandal
    // the problem is that it creates chunks(where as the development build only
    // creates a bundle.js with no chunks), but the chunks do not seem to get
    // recognized and loaded properly
    const vueWebpackBuildCmd = 'npm run build-dev --prefix vue';
    
    const vueWebpackProcess = exec(vueWebpackBuildCmd);
    vueWebpackProcess.stdout.pipe(process.stdout);
  });
};
