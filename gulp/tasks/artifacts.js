'use strict';

const path = require('path');
const fs = require('fs-extra');
const del = require('del');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

const sizes = require('../resolutions');
const maps = require('../maps');

/**
 * Populates the dist folder.
 */
gulp.task('artifacts', async () => {
  await del(folders.distDir);
  await fs.ensureDir(folders.distDir);

  for (const map of maps) {
    const bar = utils.processProgress(map, Object.keys(sizes).length);

    for (const size of Object.keys(sizes)) {
      const inFile = 'map.geo.json';
      const outFile = [map, size].join('-') + '.geo.json';

      const inMapPath = path.join(folders.buildDir, map, size, inFile);
      const outMapPath = path.join(folders.distDir, outFile);

      // eslint-disable-next-line no-await-in-loop
      await fs.copy(inMapPath, outMapPath);

      bar.tick();
    }
  }
});
