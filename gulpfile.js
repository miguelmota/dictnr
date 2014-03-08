var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');

var paths = {
  scripts: ['dictnr.js']
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['test']);
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  gulp.src('test/dictSpec.js')
    .pipe(jasmine());
});

gulp.task('build', ['scripts']);
gulp.task('default', ['watch']);
