var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('./public/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default', function() {
	gulp.watch('public/css/*.scss', ['styles']);
});