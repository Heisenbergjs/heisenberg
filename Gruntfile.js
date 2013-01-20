module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          appDir: "./",
          baseUrl: "js",
          dir: "dist",
          mainConfigFile: "js/main.js",
          name: "main",
          findNestedDependencies: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['requirejs']);

};
