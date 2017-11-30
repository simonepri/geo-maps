'use strict';

const gulp = require('gulp');

const maps = require('../maps');

/**
 * Generate all maps.
 */
gulp.task('generate',
  gulp.series(
    'countries',
    gulp.series(maps.map(name => name + '-generate'))
  )
);
