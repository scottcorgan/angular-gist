module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'angular-gist.min.js': ['angular-gist.js']
        }
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
//   // Tasks
  grunt.registerTask('build', ['uglify']);
};