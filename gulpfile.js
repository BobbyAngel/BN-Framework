const { series, src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function javascript(cb) {
  return src('src/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dest/'));

  cb();
}

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dest/'));
}

watch('src/*.js', javascript);
