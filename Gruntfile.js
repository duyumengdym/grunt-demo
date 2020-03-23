module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {  
      'dist/rectangle.css': 'rectangle.css'
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);
};