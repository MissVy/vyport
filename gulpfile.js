var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var rm = require('gulp-rm');
var run = require('gulp-run');

gulp.task('rev', function() {
	var excludes = [
		/^\/favicon.ico$/g,
		/^\/.*.html/g,
		/^\/.*.yml/g,
		/^\/.*.bat/g,
		/^\/.*.config/g,
		/^\/.*.php/g
	]
	var revAll = new RevAll({
		dontRenameFile: excludes,
		dontUpdateReference: excludes

	});


	gulp.src('dist/**/*.*', {
		read: false
	}).pipe(rm({
		async: false
	}));

	return gulp.src('2016portfolio/**')
		.pipe(revAll.revision())
		.pipe(gulp.dest('dist'))
});

gulp.task('deploy-only', ['rev'], function() {
	return run('aws-deploy.cmd').exec();
})

gulp.task('default', ['rev', 'deploy-only'])