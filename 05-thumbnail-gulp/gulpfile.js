var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var vinylSource = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');

gulp.task('default', function() {
  var bundler = browserify({
    entries:      ['./src/App.jsx'],
    transform:    [reactify],
    extensions:   ['.jsx'],
    debug:        true,
    packageCache: {},
    fullPaths:    true
  })

  function build(file) {
    if (file) { gulpUtil.log('Recompiling ' + file); }

    var stream = bundler
      .bundle()
      .on('error', gulpUtil.log.bind(gulpUtil, 'Browserfiy Error'))
      .pipe(vinylSource('main.js'))
      .pipe(gulp.dest('./public'));

    stream = stream
      .pipe(rename('main.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest('./public'));

    return stream;
  }

  build();
  bundler.on('update', build)
});
