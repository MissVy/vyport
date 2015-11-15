var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var rm = require('gulp-rm');
var run = require('gulp-run');

gulp.task('rev', function() {

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

	return gulp.src('2015portfolio/**')
		.pipe(revAll.revision())
		.pipe(gulp.dest('dist'))
});

gulp.task('deploy', ['rev'], function() {
	return run('deploy.cmd').exec();
})

gulp.task('default', ['rev', 'deploy'])