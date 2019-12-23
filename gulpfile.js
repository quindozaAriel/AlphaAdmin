const gulp     = require('gulp');
const cssnano  = require('gulp-cssnano');
const sass     = require('gulp-sass');
const concat   = require('gulp-concat');
const uglify   = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

gulp.task('resources-sass',()=>
{
 return gulp.src('src/styles/*')
      .pipe(sass())
      .pipe(cssnano())
      .pipe(gulp.dest('build/styles'));
});

gulp.task('resources-js',()=>
{
 return gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/bootstrap/dist/js/bootstrap.js'])
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/scripts'));
});

gulp.task('image',()=>
{
 return gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('build/images'));
});

// src/scripts/*