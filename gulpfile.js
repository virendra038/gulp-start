//requirements

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

//scripts

gulp.task('scripts',function(){
	gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});	

//watch task

gulp.task('watch',function(){
	gulp.watch('app/js/**/*.js',['scripts']);
});


//default task

gulp.task('default',['watch']);