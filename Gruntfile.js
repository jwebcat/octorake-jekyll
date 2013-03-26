module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      jekyllSources: {
        files: [
          // capture all except css - add your own
          '*.html', '*.yml', 'assets/javascripts/**.js',
          '_posts/**', '_includes/**', '*.json',
          'assets/images/**', 'compass/**', '*.md',
          '_layouts/**', '_plugins/**', '*.markdown'

          ],
        tasks: 'shell:jekyll',
      }
    },
    copy: {
      css : {
        files: {
          // Copy the less-generated style file to
          // the _site/ folder
          '_site/assets/stylesheets/*.css': 'assets/stylesheets/*.css'
        }
      }
    },
  shell: {
      jekyll: {
          command: 'rm -rf _site/*; jekyll',
          stdout: true
      }
  },

  });
  // Default task.
  grunt.registerTask('default', 'watch');

};