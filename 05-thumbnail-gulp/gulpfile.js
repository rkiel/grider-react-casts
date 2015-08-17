var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var vinylSource = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries:      ['./src/App.jsx'],
    transform:    [reactify],
    extensions:   ['.jsx'],
    debug:        true,
    packageCache: {},
    fullPaths:    true
  }))

  function build(file) {
    if (file) { gulpUtil.log('Recompiling ' + file); }

    return bundler
      .bundle()
      .on('error', gulpUtil.log.bind(gulpUtil, 'Browserfiy Error'))
      .pipe(vinylSource('main.js'))
      .pipe(gulp.dest('./'));
  }

  build();
  bundler.on('update', build)
});
