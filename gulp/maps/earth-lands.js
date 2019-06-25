'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the OSM lakes map in the tmp folder.
 */
gulp.task('earth-lands-generate', async () => {
  const landsPath = path.join(folders.mapsDir, 'earth-lands.shp');
  const coastlinesPath = path.join(folders.mapsDir, 'earth-coastlines.shp');
  const lakesPath = path.join(folders.mapsDir, 'earth-lakes.shp');
  const riversPath = path.join(folders.mapsDir, 'earth-rivers.shp');

  const cmd = '-i ' + coastlinesPath + ' ' +
    '-erase ' + lakesPath + ' target=1 ' +
    '-erase ' + riversPath + ' target=1 ' +
    '-o format=shapefile ' + landsPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
