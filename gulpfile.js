var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var clean = require('gulp-clean');

gulp.task('default', function() {

	var revAll = new RevAll({
		dontRenameFile: [
			/^\/favicon.ico$/g,
			/^\/.*.html/g,
			/^\/.*.yml/g,
			/^\/.*.bat/g
		]
	});
	gulp.src('2015portfolio/**')
		.pipe(revAll.revision())
		.pipe(clean())
		.pipe(gulp.dest('dist'));

});