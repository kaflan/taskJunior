var gulp = require('gulp');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
      host: "localhost",
      livereload: true,
      port: 9007,
      open: true
    }));
});
gulp.task('watch1', function() {
    gulp.watch('app/scripts', ['js']);
});
gulp.task('js', function(){
  return gulp.src('app/scripts/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('app/concat/'));
});
gulp.task('connect', function() {
  connect.server({
    root: 'app',
     port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch2', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
gulp.task('default', ['connect', 'watch1','watch2'])
