module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		 sass: {
	      dist: {
	        options: {
	         style: 'compressed',
	         sourcemap: 'auto'
	        },
	        files: {
	          'css/style.css': 'scss/style.scss'
	        }
	      }
    },
		watch: {
			css: {
			files: '**/*.scss',
			tasks: ['sass'],
			options: {
			  livereload: true,
			},
			},
},
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		//'sass'
		'watch'
		]);
}