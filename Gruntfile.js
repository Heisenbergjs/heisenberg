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
    bower: {
      install: {
         //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
         options: {
           targetDir: 'app/components'
         }
      }
    },
    jshint: {
      all: ["app/**/*.js"]
    },
    connect: {
      preview: {
        options: {
          keepalive: true,
          port: 3000
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['requirejs']);
  grunt.registerTask('server', ['connect:preview']);

};
