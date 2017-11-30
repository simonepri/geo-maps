'use strict';

const fs = require('fs-extra');
const del = require('del');

const gulp = require('gulp');

const folders = require('../folders');

/**
* Clean folders generated from the build process.
*/
gulp.task('clean', async () => {
  await del(folders.tmpDir);
  await del(folders.mapsDir);
  await del(folders.buildDir);

  await fs.ensureDir(folders.tmpDir);
  await fs.ensureDir(folders.mapsDir);
  await fs.ensureDir(folders.buildDir);
});
