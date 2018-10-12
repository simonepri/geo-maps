'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the map in the tmp folder containing all
 * the countries coastline boundaries in a single file.
 */
gulp.task('countries-land-generate', async () => {
  const landPath = path.join(folders.mapsDir, 'countries-land.shp');
  const maritimePath = path.join(folders.mapsDir, 'countries-maritime.shp');
  const landsPath = path.join(folders.mapsDir, 'earth-lands.shp');

  const cmd = '-i ' + maritimePath + ' ' +
    '-clip ' + landsPath + ' ' +
  '-o format=shapefile ' + landPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
