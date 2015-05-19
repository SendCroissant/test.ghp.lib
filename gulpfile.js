'use strict';

var browserify = require('browserify');
var builtins = require('browserify/lib/builtins');
var gulp = require('gulp');
var spawn = require('child_process').spawn;
var rename = require("gulp-rename");
var through = require('through2');

builtins.react = require.resolve('./shims/react');

var browserifyOptions = {
  builtins : builtins,
  extensions: ['.jsx'],
  transform: 'reactify'
};

function browserifyBundle(options) {
  return through.obj(function(file, enc, next) {
    browserify(options)
    .add(file.path)
    .bundle(function(err, res) {
      if (err) {
        return next(err);
      }

      // assumes file.contents is a Buffer
      file.contents = res;
      next(null, file);
    });
  });
}

function buildTask () {
  return gulp.src('guide/**/src/index.js*', {base: 'guide'})
    .pipe(browserifyBundle(browserifyOptions))
    .pipe(rename(function (path) {
      path.dirname = path.dirname.replace('src', '');
      path.basename = 'bundle';
      path.extname = '.js';
    }))
    .pipe(gulp.dest('guide'));
}

var serveTask = (function () {
  var p;

  return function spawnChildren(done) {
    // kill previous spawned process
    if(p) { p.kill(); }

    p = spawn(
      'bundle',
      ['exec', 'jekyll', 'serve', '--no-watch', '--port', '8989', '--baseurl', ''],
      {stdio: 'inherit'}
    );
    done();
  };
})();

function watchTask () {
  gulp.watch([
    '**/*.md',
    '!_*/**/*.md',
  ], ['serve']).on('change', function () {
    console.warn('changed:', arguments);
  });
}

gulp.task('build', buildTask);
gulp.task('serve', ['build'], serveTask);
gulp.task('compile-steps');
gulp.task('watch-n-serve', ['serve'], watchTask);
gulp.task('default', ['watch-n-serve']);
