var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var mainFile = './assets/src/scss/main.scss';
var scssFiles = './assets/src/scss/partials/*.scss';
var cssDest = './assets/dist/css';

gulp.task('style', function() {
  return gulp.src(mainFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
  gulp.watch(scssFiles, ['style']);
});

gulp.task('default', ['style', 'watch']);