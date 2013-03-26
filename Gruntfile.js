module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      jekyllSources: {
        files: [
          // capture all except css - add your own
          '*.html', '*.yml', 'assets/javascripts/**.js',
          '_posts/**', '_includes/**', '*.json',
          'assets/images/**', 'compass/**', '*.md',
          '_layouts/**', '_plugins/**', '*.markdown'

          ],
        tasks: ['shell:jekyll', 'copy:main'],
      },
      css: {
        files: ['assets/stylesheets/*.css'],
        tasks: ['copy:main'],
      },
    },
    copy: {
      main : {
        files: [
          // Copy the sass-generated css files to
          // the _site/ folder
          {src: ['assets/stylesheets/*.css'], dest: '_site/'},
        ]
      },
    },
    shell: {
      jekyll: {
        command: 'jekyll --limit_posts 2',
        options: {
          stdout: true
        }
      },
      server: {
        command: 'http-server _site',
        options: {
          stdout: true
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task.
  grunt.registerTask('default', ['watch']);

};