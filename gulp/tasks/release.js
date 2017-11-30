'use strict';

const gulp = require('gulp');

/**
 * Execute the whole release process.
 */
gulp.task('release', gulp.series(
  'artifacts',
  'upload'
));
