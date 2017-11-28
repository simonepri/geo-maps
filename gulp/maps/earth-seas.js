'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the OSM lakes map in the tmp folder.
 */
gulp.task('earth-seas-generate', async () => {
  const coastlinesPath = path.join(folders.mapsDir, 'earth-coastlines.geo.json');
  const seasPath = path.join(folders.mapsDir, 'earth-seas.geo.json');

  const cmd = '-rectangle bbox=-180,-90,180,90 name="bounds" ' +
    '-rectangle bbox=-180,-90,180,-80 name="south-pole-fix" ' +
    '-erase 2 target=1 ' +
    '-drop target=2 ' +
    '-erase ' + coastlinesPath + ' target=1 ' +
    '-o precision=0.000001 format=geojson ' + seasPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
