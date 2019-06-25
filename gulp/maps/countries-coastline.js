'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the map in the tmp folder containing all
 * the countries coastline boundaries in a single file.
 */
gulp.task('countries-coastline-generate', async () => {
  const coastlinePath = path.join(folders.mapsDir, 'countries-coastline.shp');
  const maritimePath = path.join(folders.mapsDir, 'countries-maritime.shp');
  const coastlinesPath = path.join(folders.mapsDir, 'earth-coastlines.shp');

  const cmd = '-i ' + maritimePath + ' ' +
    '-clip ' + coastlinesPath + ' ' +
    '-o format=shapefile ' + coastlinePath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
