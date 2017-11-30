'use strict';

/**
 *  Welcome to the gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long.
 */

const gulp = require('gulp');
const FwdRef = require('undertaker-forward-reference');

const requireDir = require('require-dir');

/**
 * Enables forward referencing for tasks.
 */
gulp.registry(new FwdRef());

/**
 * This will load all js files in the gulp directory in order to load all tasks.
 */
requireDir('./gulp', {recurse: true});

/**
 * Default task launch the build task
 */
gulp.task('default', gulp.series('build'));
