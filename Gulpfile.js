var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var pkg = require('./package.json');
var config = require('./config');

console.log('using config:', config, pkg);

// build stylus
gulp.task('build-stylus', function() {
  gulp.src('src/style/test.styl')
    .pipe(stylus())
    .pipe(concat(config.out.css))
    .pipe(gulp.dest(config.path));
});

// pug -> HTML
gulp.task('build-views', function buildHTML() {
  return gulp.src('src/**/*.pug')
  .pipe(pug({
    compileDebug: true,
    pretty: true,
    verbose: true,
    data: {
      version: config.version,
      lipsum: config.lipsum,
    },
  }))
  .pipe(gulp.dest(config.path));
});

// setup default gulp task - simply build everything
gulp.task('default', [
  'build-stylus',
  'build-views',
]);

// setup gulp watch task - watch files and build accordingly on changes
gulp.task('watch', ['default'], function () {
  gulp.watch(config.paths.stylus, ['build-stylus']);
  gulp.watch(config.paths.views, ['build-views']);
});
