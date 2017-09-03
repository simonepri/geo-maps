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
gulp.task('save', () => {
  const saveDir = path.join(GEO_DIR, '100', 'world.geo.json');

  return utils.getMap.getWorld()
    .then(world => fs.outputJson(saveDir, world));
});

/**
 *  Compress the political boundaries of the entire world.
 */
gulp.task('compress', async () => {
  const worldDir = path.join(GEO_DIR, '100', 'world.geo.json');
  const sizes = ['0.25', '0.5', '0.75', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '6', '7', '8', '9', '10', '15', '20', '25', '50', '75'];
  const bar = new ProgressBar({total: sizes.length});

  for (const size of sizes) {
    const saveDir = path.join(GEO_DIR, size, 'world.geo.json');
    const cmd = '-i ' + worldDir + ' -simplify ' + size + '% -o format=geojson ' + saveDir;

    // eslint-disable-next-line no-await-in-loop
    await pify(mapshaper.runCommands)(cmd);
    bar.tick();
  }
});
