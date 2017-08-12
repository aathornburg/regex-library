var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
    return browserify(
        {
            entries: ['./src/js/app.js'],
            debug: true
        })
        .transform(babelify, { presets: ['env'], sourceMaps: true })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        // source maps WILL WORK, at least on node v8.3.0 and **after a page refresh**.  Tested in Chrome/Firefox
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
});

//gulp.task('watch', )

gulp.task('serve', ['scripts'], function() {
    browserSync.init({
        // serve from the src/ and dist/ directories
        server: ["src", "dist"]
    });
});

gulp.task('default', ['serve']);