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
  const landPath = path.join(folders.mapsDir, 'countries-land.geo.json');
  const maritimePath = path.join(folders.mapsDir, 'countries-maritime.geo.json');
  const landsPath = path.join(folders.mapsDir, 'earth-lands.geo.json');

  const cmd = '-i ' + maritimePath + ' ' +
    '-clip ' + landsPath + ' ' +
    '-o precision=0.000001 format=geojson ' + landPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
