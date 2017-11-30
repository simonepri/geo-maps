'use strict';

const path = require('path');
const fs = require('fs-extra');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

const sizes = require('../resolutions');
const precisions = require('../precisions');

const maps = require('../maps');

/**
 * Generates one map for each different resolution available of the maps in the
 * maps folder.
 */
gulp.task('compress', async () => {
  for (const map of maps) {
    const bar = utils.processProgress(map, Object.keys(sizes).length);

    for (const size of Object.keys(sizes)) {
      const mapPath = path.join(folders.mapsDir, map + '.geo.json');
      const outMapDir = path.join(folders.buildDir, map, size);
      const outMapPath = path.join(outMapDir, 'map.geo.json');

      // eslint-disable-next-line no-await-in-loop
      await fs.ensureDir(outMapDir);

      const cmd = '-i ' + mapPath + ' ' +
        '-simplify rdp interval=' + sizes[size] + ' ' +
        '-filter remove-empty ' +
        '-o precision=' + precisions[size] + ' format=geojson ' + outMapPath;
      // eslint-disable-next-line no-await-in-loop
      await utils.mapshaperCmd(cmd);

      bar.tick();
    }
  }
});
