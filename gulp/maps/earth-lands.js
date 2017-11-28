'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the OSM lakes map in the tmp folder.
 */
gulp.task('earth-lands-generate', async () => {
  const landsPath = path.join(folders.mapsDir, 'earth-lands.geo.json');
  const coastlinesPath = path.join(folders.mapsDir, 'earth-coastlines.geo.json');
  const lakesPath = path.join(folders.mapsDir, 'earth-lakes.geo.json');
  const riversPath = path.join(folders.mapsDir, 'earth-rivers.geo.json');

  const cmd = '-i ' + coastlinesPath + ' ' +
    '-erase ' + lakesPath + ' target=1 ' +
    '-erase ' + riversPath + ' target=1 ' +
    '-o precision=0.000001 format=geojson ' + landsPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
