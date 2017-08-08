var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
    return browserify({ entries: ['./src/app.js'] })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./.tmp'))
});

//gulp.task('watch', )

//gulp.task('serve', ['watch'])

gulp.task('default', ['scripts']);