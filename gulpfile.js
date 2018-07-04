"use strict";
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var SOURCE_DIRECTORY = 'src/**/*.js';
var DEST_DIRECTORY = 'dist/';

gulp.task('default', [
    'compile',
    'copy-package-json',
    'copy-readme',
    'copy-d-ts'
]);

gulp.task('compile', function() {
    return gulp.src(SOURCE_DIRECTORY).
        pipe(uglify()).
        pipe(gulp.dest(DEST_DIRECTORY));
});

gulp.task("copy-package-json", function () {
    return gulp.src('package.json').
        pipe(gulp.dest(DEST_DIRECTORY));
});

gulp.task("copy-readme", function () {
    return gulp.src('README.md').
        pipe(gulp.dest(DEST_DIRECTORY));
});

gulp.task("copy-d-ts", function() {
    return gulp.src('index.d.ts').
        pipe(gulp.dest(DEST_DIRECTORY));
});