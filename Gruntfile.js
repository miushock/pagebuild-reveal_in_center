module.exports = function(grunt) {

  grunt.initConfig({
    
    //config and credential
    pkg: grunt.file.readJSON('package.json'),
    credential: grunt.file.readJSON('.credential.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    copy: {
      scripts: {
        expand:true,
        cwd: './src',
        src: './*.js',
        dest: './test/scripts'
      },
      style_sheets: {
        expand:true,
        cwd: '.src',
        src: './*.css',
        dest: './test/style_sheets'
      }
    },

    submit_pagebuild: {
      widgets: ['presenter'],
      layout: "./src/layout.html",
      style: "./src/style.css",
      name: '<%= pkg.name %>',
      author_email: '<%= pkg.author.email %>',
      auth_email: '<%= credential.user_email %>',
      auth_pw: '<%= credential.password %>'
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('freelog-widgetscript');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http');

  grunt.registerTask('default', ['jshint']);

};
