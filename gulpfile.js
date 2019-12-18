var gulp = require('gulp'),
    njkRender = require('gulp-nunjucks-render'),
	prettify = require('gulp-html-prettify'),
	sass = require('gulp-sass'),
 	concat = require('gulp-concat-css'),
 	browserSync = require('browser-sync'),
	path = require('path');





gulp.task('sass', function() {
    return gulp.src('./src/sass/*.sass')
        .pipe(sass({
            paths: [ path.join(__dirname, 'bower_components') ]
        }))
        .pipe(concat('./src/css/main.css'))
        .pipe(gulp.dest('./'))
});

gulp.task('browser-sync', gulp.series('sass'), function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.sass', gulp.series('sass'));
    gulp.watch('./src/css/*.css').on("change", browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'watch','browser-sync'));
