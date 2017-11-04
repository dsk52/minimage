'use strict';

import gulp from 'gulp'
import config from '../config'

gulp.task('default', [], () => {
  console.log('gulp runnning.');

  gulp.watch(config.source.html + '**/*.pug', ['pug']);
  gulp.watch(config.source.stylesheets + '**/*.scss', ['sass']);
  gulp.watch(config.source.javascripts.path + '**/*.js', ['webpack']);
});
