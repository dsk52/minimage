'use strict';

import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import bulkSass from 'gulp-sass-bulk-import'
import newer from 'gulp-newer'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import cleancss from 'gulp-clean-css';
import packageImporter from 'node-sass-package-importer';

import config from '../config'

gulp.task('sass', () => {
  return gulp.src([
    config.source.stylesheets + '**/*.scss',
    '!' + config.source.stylesheets + '**/_*.scss'
  ])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(newer(config.build.stylesheets))
  .pipe(bulkSass())
  .pipe(sass({
    importer: packageImporter({
      extensions: ['.scss', '.css']
    })
  }))
  .pipe(autoprefixer({
    browsers: config.browsers,
    cascade: false
  }))
  .pipe(cleancss())
  .pipe(gulp.dest(config.build.stylesheets));

});
