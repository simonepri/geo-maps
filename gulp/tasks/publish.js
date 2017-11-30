'use strict';

const gulp = require('gulp');

/**
 * Execute the whole publish process.
 */
gulp.task('publish', gulp.series(
  'packages',
  'npm'
));
