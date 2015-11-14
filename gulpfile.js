var gulp = require('gulp');
var RevAll = require('gulp-rev-all');

gulp.task('default', function() {

	var revAll = new RevAll();
	gulp.src('dist/**')
		.pipe(revAll.revision())
		.pipe(gulp.dest('cdn'));

});