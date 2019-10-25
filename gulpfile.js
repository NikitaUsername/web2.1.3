var gulp = require('gulp'),
    njkRender = require('gulp-nunjucks-render'),
	prettify = require('gulp-html-prettify'),
	sass = require('gulp-sass'),
 	concat = require('gulp-concat-css'),
 	browserSync = require('browser-sync'),
	path = require('path');


gulp.task('nunjucks', function() {
	return gulp.src('./src/njk/index.njk')
		.pipe(njkRender())
		.pipe(prettify({
			indent_size : 4 
        }))
		.pipe(gulp.dest('./src/'));
});


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
	gulp.watch('./**/*.njk', gulp.series('nunjucks'));
    gulp.watch('./src/css/*.css').on("change", browserSync.reload);
    gulp.watch('./src/index.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'nunjucks', 'watch','browser-sync'));
