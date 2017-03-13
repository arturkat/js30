var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: ['./', './dist'],
    livereload: true
  });
});

gulp.task('dist', function () {
  gulp.src('./dist/**/*.*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./dist/**/*.*'], ['dist']);
});

gulp.task('default', ['connect', 'watch']);