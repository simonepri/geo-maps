'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the OSM lakes map in the tmp folder.
 */
gulp.task('earth-waterbodies-generate', async () => {
  const watersPath = path.join(folders.mapsDir, 'earth-waterbodies.shp');
  const lakesPath = path.join(folders.mapsDir, 'earth-lakes.shp');
  const riversPath = path.join(folders.mapsDir, 'earth-rivers.shp');
  const seasPath = path.join(folders.mapsDir, 'earth-seas.shp');

  const cmd = '-i combine-files ' + riversPath + ' ' + lakesPath + ' ' + seasPath + ' ' +
    '-merge-layers ' +
    '-o format=shapefile ' + watersPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
