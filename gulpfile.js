var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var rm = require('gulp-rm');

gulp.task('default', function() {

	var revAll = new RevAll({
		dontRenameFile: [
			/^\/favicon.ico$/g,
			/^\/.*.html/g,
			/^\/.*.yml/g,
			/^\/.*.bat/g
		]

	});

	gulp.src('dist/**/*.*', {
		read: false
	}).pipe(rm({
		async: false
	}));
	gulp.src('2015portfolio/**')
		.pipe(revAll.revision())
		.pipe(gulp.dest('dist'));


});