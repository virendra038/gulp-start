//requirements

var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync');
	reload = browserSync.reload;
	uglify = require('gulp-uglify'),
	compass= require('gulp-compass'),
	rename = require('gulp-rename');

//scripts

gulp.task('scripts',function(){
	gulp.src(['app/js/**/*.js','!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});	


// compass task

	gulp.task('compass',function(){
		gulp.src('app/scss/style.scss')
		.pipe(plumber())
		.pipe(compass({
			config_file:'./config.rb',
			css:'app/css',
			sass:'app/scss',
			require:['susy']
		}))
		.pipe(gulp.dest('app/css/'))
		.pipe(reload({stream:true}));
	});


// browserSync task

gulp.task('browser-sync',function(){
	browserSync({
		baseDir:"./app/"
	});
});



// html task
gulp.task('html',function(){
	gulp.src('app/**/*.html')
	.pipe(reload({stream:true}));
});
//watch task

gulp.task('watch',function(){
	gulp.watch('app/js/**/*.js',['scripts']);
	gulp.watch('app/scss/**/*.scss',['compass']);
	gulp.watch('app/**/*.html',['html']);
});


//default task

gulp.task('default',['scripts','compass','html','browser-sync','watch']);