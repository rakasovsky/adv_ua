const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
const watch = require('gulp-watch');

gulp.task('scss-compile', function () {
    return gulp.src('static/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('static/css'))
})

gulp.task('watch', function () {
    gulp.watch('static/scss/*.scss', gulp.series('scss-compile'))
})