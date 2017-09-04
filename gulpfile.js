'use strict';

const path = require('path');
const fs = require('fs-extra');
const pify = require('pify');

const mapshaper = require('mapshaper');
const ProgressBar = require('ascii-progress');

const gulp = require('gulp');
const utils = require('./utils');

const GEO_DIR = path.join(__dirname, 'geojson');

/**
 *  Save the political boundaries of the entire world.
 */
gulp.task('save', async () => {
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
  const sizes = [
    '1', '2', '5',
    '10', '25', '50',
    '100', '250', '500',
    '1000', '2500', '5000',
    '10000', '25000', '50000',
    '100000', '250000', '500000'
  ];
  const bar = new ProgressBar({total: sizes.length});

  for (const size of sizes) {
    const saveDir = path.join(GEO_DIR, size + 'm');
    const savePath = path.join(saveDir, 'world.geo.json');
    const cmd = '-i ' + worldPath + ' -simplify keep-shapes interval=' + size + ' -o format=geojson ' + savePath;
    // eslint-disable-next-line no-await-in-loop
    await fs.ensureDir(saveDir);
    // eslint-disable-next-line no-await-in-loop
    await pify(mapshaper.runCommands)(cmd);
    bar.tick();
  }
});
