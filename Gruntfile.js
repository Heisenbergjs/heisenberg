module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          appDir: "./",
          baseUrl: "app",
          dir: "dist",
          mainConfigFile: "app/main.js",
          name: 'main',
          findNestedDependencies: true,
          fileExclusionRegExp: /^\.|node_modules|Gruntfile|\.md|package.json/
        }
      }
    },
    jshint: {
      all: ["app/**/*.js"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', ['requirejs']);

};
