/// <reference path="typings/node/node.d.ts"/>	
var path = require('path');

var gulp = require('gulp');

var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
	return gulp.src(['./styles/[^_]*.less'])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./', { includeContent: false }))
		.pipe(gulp.dest('./styles'));
});

gulp.task('watch', function () {
	watch('**/*.less', batch(function (events, done) {
		gulp.start('default', done);
	}));
});