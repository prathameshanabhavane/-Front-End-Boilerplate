var gulp = require('gulp');
// npm install gulp-clean-css --save-dev
var cleanCSS = require('gulp-clean-css');
// npm install gulp-sass --save-dev
var sass = require('gulp-sass');
// npm install gulp-uglify --save-dev
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	console.log('Gulp js is running');
});

gulp.task('css', function() {
	return gulp.src('src/css/style.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('public/css'));
});

gulp.task('sass', function() {
   	return gulp.src('src/sass/style.scss')
		.pipe(sass())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
    return gulp.src('src/js/app.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
   gulp.watch('src/sass/*.scss', gulp.series('sass'));
});