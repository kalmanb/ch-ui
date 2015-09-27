'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    autoprefixer = require('autoprefixer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    eslint = require('gulp-eslint'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    htmlReplace = require('gulp-html-replace'),
    image = require('gulp-image'),
    reload = browserSync.reload,
    config = {
      jsx: './src/App.jsx',
      scss: 'styles/**/*.scss',
      bundle: 'app.js',
      distJs: 'dist/js',
      distCss: 'dist/css',
      distFont: 'dist/font',
      distFonts: 'dist/fonts',
      distHtml: 'dist',
      distImg: 'dist/img'
    };

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(config.jsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(config.bundle))
      .pipe(gulp.dest(config.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify({
    entries: config.jsx
  }
    )
    .transform(babelify)
    .bundle()
    .pipe(source(config.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.distJs));
});

gulp.task("bower-js", function() {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/materialize/dist/js/materialize.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.distJs))
})

gulp.task('sass', function() {
  return gulp.src(config.scss)
    .pipe(changed(config.distCss))
    .pipe(sass({errLogToConsole: true}))
    .on('error', notify.onError())
    .pipe(postcss([autoprefixer('last 1 version')]))
    .pipe(csso())
    .pipe(gulp.dest(config.distCss))
    .pipe(reload({stream: true}));
});

gulp.task("bower-css", function() {
  return gulp.src([
    "bower_components/materialize/bin/materialize.css",
    "bower_components/animate.css/animate.css",
    "bower_components/font-awesome/css/font-awesome.css"
  ])
  .pipe(concat("vendor.css"))
  .pipe(gulp.dest(config.distCss));
});

gulp.task('styles', function() {
    gulp.start(['sass', 'bower-css']);
});

gulp.task("material-fonts", function() {
  return gulp.src([
    "bower_components/materialize/font/**/*"
  ])
    .pipe(gulp.dest(config.distFont))
})

gulp.task("fonts-awesome", function() {
  return gulp.src([
    "bower_components/font-awesome/fonts/**.*"
  ])
    .pipe(gulp.dest(config.distFonts))
})

gulp.task('fonts', function() {
  gulp.start(['material-fonts', 'fonts-awesome']);
});

gulp.task('html-replace', function () {
  var replacements = {
    css: 'css/main.css',
    js: 'js/app.js'
  };

  return gulp.src('index.html')
    .pipe(htmlReplace(replacements))
    .pipe(gulp.dest(config.distHtml));
});

gulp.task('image', function () {
  return gulp.src('img/**')
    .pipe(image())
    .pipe(gulp.dest(config.distImg));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.jsx')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watchTask', function() {
  gulp.watch(config.scss, ['styles']);
  gulp.watch('src/**/*.jsx', ['lint']);
});

gulp.task('watch', ['clean'], function() {
  gulp.start(['browserSync', 'watchTask', 'watchify', 'bower-js', 'fonts', 'styles', 'lint', 'image']);
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserify', 'bower-js', 'styles', 'fonts', 'html-replace', 'image']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
