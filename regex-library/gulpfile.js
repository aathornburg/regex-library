var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
    return browserify({ entries: ['./src/js/app.js'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('.tmp'))
});

//gulp.task('watch', )

gulp.task('serve', ['scripts'], function() {
    browserSync.init({
        // serve from the src/ and .tmp/ directories
        server: ["src", ".tmp"]
    })
});

gulp.task('default', ['serve']);