const path = require('path');
const loadGruntConfig = require('load-grunt-config');
const timeGrunt = require('time-grunt');

module.exports = function (grunt) {
  const DURANDAL_APP_FOLDER = process.cwd();
  const DIST_FOLDER = 'dist';
  const BUILD_FOLDER = grunt.option('buildPath') || DIST_FOLDER;
  const BUILD_PATH = path.join(DURANDAL_APP_FOLDER, '..', BUILD_FOLDER);

  timeGrunt(grunt);
  loadGruntConfig(grunt, {
    configPath: path.join(DURANDAL_APP_FOLDER, 'grunt/config'),
    init: true,
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    },
    data: {
      BUILD_PATH,
      DIST_FOLDER,
      DURANDAL_APP_FOLDER
    }
  });
};
