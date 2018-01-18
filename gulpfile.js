const gulp = require('gulp');
const babel = require('gulp-babel');

const files = [
    'src/**/*.js'
];

gulp.task('build', () =>
    gulp.src(files)
        .pipe(babel())
        .pipe(gulp.dest('dist')));

gulp.task('default', ['build']);

gulp.task('watch', () => gulp.watch(files, ['build']));