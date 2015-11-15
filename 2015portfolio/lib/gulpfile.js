var gulp = require('gulp');
var RevAll = require('gulp-rev-all');

gulp.task('default', function() {

	var revAll = new RevAll();
	gulp.src('2015portfolio/**').pipe(function() {
			console.log(arguments);
		})
		.pipe(revAll.revision())
		.pipe(gulp.dest('cdn'));

});