'use strict';

var browserify = require('browserify');
var builtins = require('browserify/lib/builtins');
var cache = require('gulp-cached');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var rename = require("gulp-rename");
var spawn = require('child_process').spawn;
var table = require('text-table');
var through = require('through2');

builtins.react = require.resolve('./shims/react');

var browserifyOptions = {
  builtins : builtins,
  extensions: ['.jsx'],
  transform: 'reactify'
};

var jshintReporterOpts = {
  verbose: true
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

function jshintReporter(result, config, options) {
  var total = result.length;
  var ret = '';
  var headers = [];
  var prevfile;

  options = options || {};

  ret += table(result.map(function (el, i) {
    var err = el.error;
    var line = [
      '',
      gutil.colors.yellow('line ' + err.line),
      gutil.colors.yellow('col ' + err.character),
      gutil.colors.red(err.reason)
    ];

    if (el.file !== prevfile) {
      headers[i] = el.file;
    }

    if (options.verbose) {
      line.push(gutil.colors.yellow('(' + err.code + ')'));
    }

    prevfile = el.file;

    return line;
  }), {
    stringLength: function (str) {
      return gutil.colors.stripColor(str).length;
    }
  }).split('\n').map(function (el, i) {
    return headers[i] ? '\n' + gutil.colors.magenta.underline(headers[i]) + '\n' + el : el;
  }).join('\n') + '\n\n';

  var sign;
  if (total > 0) {
    sign = process.platform !== 'win32' ? '✖ ' : '';
    ret += gutil.colors.red.bold(sign + total + ' problem' + (total === 1 ? '' : 's'));
  } else {
    sign = process.platform !== 'win32' ? '✔ ' : '';
    ret += gutil.colors.green.bold(sign + 'No problems');
    ret = '\n' + ret.trim();
  }

  console.log(ret + '\n');
};

function jshintTask () {
  return gulp.src([
    'guide/**/src/*'
  ])
  .pipe(cache('jshint'))
  .pipe(react())
  .pipe(jshint())
  .pipe(jshint.reporter(jshintReporter, jshintReporterOpts));
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
    '**/*.md', '!_*/**/*.md',
    'guide/**/*.js*', '!guide/**/bundle*',
    '!node_modules/**'
  ], ['serve']).on('change', function (e) {
    console.warn('\n#', e.type + ':', e.path);
  });
}

gulp.task('jshint', jshintTask);
gulp.task('build', ['jshint'], buildTask);
gulp.task('serve', ['build'], serveTask);
gulp.task('compile-steps');
gulp.task('watch-n-serve', ['serve'], watchTask);
gulp.task('default', ['watch-n-serve']);
