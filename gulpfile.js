'use strict';

const path = require('path');
const fs = require('fs-extra');
const pify = require('pify');

const mapshaper = require('mapshaper');
const ProgressBar = require('ascii-progress');

const gulp = require('gulp');
const utils = require('./utils');

const GEO_DIR = path.join(__dirname, 'geojson', 'world', 'maritime');

/**
 *  Save the political boundaries of the entire world.
 */
gulp.task('generate', async () => {
  const saveDir = path.join(GEO_DIR, 'orig');
  const savePath = path.join(saveDir, 'world.geo.json');

  await fs.ensureDir(saveDir);
  await utils.getMap.getWorld()
    .then(world => fs.outputJson(savePath, world));
});

/**
 *  Compress the political boundaries of the entire world.
 */
gulp.task('compress', async () => {
  const worldPath = path.join(GEO_DIR, 'orig', 'world.geo.json');
  const sizes = {
    '1m': '1',
    '2m5': '2.5',
    '5m': '5',
    '10m': '10',
    '25m': '25',
    '50m': '50',
    '100m': '100',
    '250m': '250',
    '500m': '500',
    '1km': '1000',
    '2km5': '2500',
    '5km': '5000',
    '10km': '10000'
  };
  const bar = new ProgressBar({total: Object.keys(sizes).length});

  for (const size of Object.keys(sizes)) {
    const saveDir = path.join(GEO_DIR, size);
    const savePath = path.join(saveDir, 'world.geo.json');
    const cmd = '-i ' + worldPath + ' -simplify keep-shapes interval=' + sizes[size] + ' -o format=geojson ' + savePath;
    // eslint-disable-next-line no-await-in-loop
    await fs.ensureDir(saveDir);
    // eslint-disable-next-line no-await-in-loop
    await pify(mapshaper.runCommands)(cmd);
    bar.tick();
  }
});
