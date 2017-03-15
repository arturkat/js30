var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
    connect.server({
        root: ['./', './dist'],
        livereload: true
    });
});

gulp.task('reloadDist', function () {
    gulp
        .src('./dist/**/*.*')
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    return gulp
        .src('./dist/style/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/style/css'));
});

gulp.task('watch', function () {
    gulp
        .watch(['./dist/**/*.*'], ['sass', 'reloadDist']);
});

// kick it off
gulp.task('default', ['sass', 'connect', 'watch']);



// Summary
/*
.task('name', function..)
.src()
.pipe(required.method())
.pipe(dest());
.watch([glob-files], [tasks..])
*/

gulp.task('log', function() {
    // console.log(gulp.src('./dist/style/scss/**/*.scss'));
    // console.log(gulp.dest('./dist/style/scss/**/*.scss'));
});

