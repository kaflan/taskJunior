var gulp = require('gulp');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
      livereload: true,
      port: 9005,
      // directoryListing: true,
      open: true
    }));
});
gulp.task('watch', function() {
    gulp.watch('app/scripts', ['js']);
});
gulp.task('js', function(){
  return gulp.src('app/scripts*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('app/concat/'));
})
gulp.task('default', ['webserver', 'watch'])
