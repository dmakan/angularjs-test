'use strict';
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		 /*
         * Just a definition of all the sources files and their location. We
         * put them in a meta section so that we only need to declare them once.
         */
        meta: {
            gruntfile: 'Gruntfile.js',
            client: {
                js: ['src/js/**/*.js'],
            }
        },
		
		uglify: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				build: {
			src: 'src/js/<%= pkg.name %>.js',
			dest: 'dest/js/<%= pkg.name %>.min.js',
				}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
  
	// Default task(s).
	grunt.registerTask('default', ['uglify']);
};
