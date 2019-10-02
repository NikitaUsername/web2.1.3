var gulp = require('gulp'),
    njkRender = require('gulp-nunjucks-render'),
	prettify = require('gulp-html-prettify'),
	sass = require('gulp-sass'),
 	concat = require('gulp-concat-css'),
 	browserSync = require('browser-sync'),
	path = require('path');

// создаем gulp задачу на компиляцию всех nunjucks шаблонов в текущей директории
gulp.task('nunjucks', function() {
	return gulp.src('./src/njk/index.njk')
		.pipe(njkRender())
		.pipe(prettify({
			indent_size : 4 // размер отступа - 4 пробела
        }))
       // .pipe(concat('./src/index.html'))
		.pipe(gulp.dest('./src/'));
});

// задача для компиляции sass в css
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
// при запуске выполняем компиляцию и начинаем следить за изменениями
gulp.task('default', gulp.series('sass', 'nunjucks', 'watch','browser-sync'));
