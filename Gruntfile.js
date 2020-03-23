module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
          'dist/rectangle.js': 'rectangle.js'
        }
      }       
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};