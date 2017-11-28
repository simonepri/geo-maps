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
  const coastlinePath = path.join(folders.mapsDir, 'countries-coastline.geo.json');
  const maritimePath = path.join(folders.mapsDir, 'countries-maritime.geo.json');
  const coastlinesPath = path.join(folders.mapsDir, 'earth-coastlines.geo.json');

  const cmd = '-i ' + maritimePath + ' ' +
    '-clip ' + coastlinesPath + ' ' +
    '-o precision=0.000001 format=geojson ' + coastlinePath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
