'use strict';

const path = require('path');
const fs = require('fs-extra');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

const maps = require('../maps');

const prevs = {
  'earth-coastlines': '5km',
  'earth-rivers': '2km5',
  'earth-lakes': '5km',
  'earth-seas': '5km',

  'countries-maritime': '5km',
  'countries-coastline': '5km'
};

/**
 * Copy an example of each type of maps in the preview folder to be used
 * to show a live preview of the maps.
 */
gulp.task('previews', async () => {
  const bar = utils.processProgress('previews', maps.length);

  for (const map of maps) {
    const inMapFile = 'map.geo.json';
    const outMapFile = map + '.geo.json';

    const inMapDir = path.join(folders.buildDir, map, prevs[map] || '10km');

    const inMapPath = path.join(inMapDir, inMapFile);
    const outMapPath = path.join(folders.prevDir, outMapFile);

    // eslint-disable-next-line no-await-in-loop
    await fs.copy(inMapPath, outMapPath);

    bar.tick();
  }
});
