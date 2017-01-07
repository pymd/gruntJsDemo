module.exports = function(grunt){

	/*
	grunt.registerTask('default', "", function(){
		grunt.log.write("This grunt task is pointless.");
	});
	*/

	// Configure main project settings
	grunt.initConfig({

		// Basic settings and info about our plugins
		pkg: grunt.file.readJSON('package.json'),

		// Name of the plugin (plugin name without "grunt-contrib-")
		cssmin: {
			combine: {
				files: {
					'html/css/main.css': ['html/css/index.css']
				}
			}
		},

		// uglify javascript
		uglify: {
			dist: {
				files: {
					'html/js/index.min.js': ['html/js/index.js']
				}
			}
		}
	});

	// Load the plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Do the task
	grunt.registerTask('default', ['cssmin', 'uglify']);
};