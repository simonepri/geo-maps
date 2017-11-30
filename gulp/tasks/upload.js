'use strict';

const path = require('path');
const version = require('project-version');

const gulp = require('gulp');
const release = require('gulp-github-release');

const folders = require('../folders');

/**
 * Upload artifacts on GitHub
 */
gulp.task('upload', () => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    throw new Error('Environment variable GITHUB_TOKEN is required for GitHub releases.');
  }
  return gulp.src(path.join(folders.distDir, '*'))
    .pipe(
      release({
        token: GITHUB_TOKEN,
        name: 'Release ' + version,
        draft: true,
        manifest: require('../../package.json')
      })
    );
});
