module.exports = function(grunt) {
  grunt.registerTask('process-things', [
    'clean:dist',
    'copy-things'
  ]);
};
