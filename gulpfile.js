const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwind = require('tailwindcss');
const sass = require('gulp-sass');

gulp.task('css', function(){
    var plugins = [
        tailwind
    ]
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ()=>(
    gulp.watch('./sass/*.scss', gulp.series ('css'))
));
