'use strict';

const path = require('path');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the OSM lakes map in the tmp folder.
 */
gulp.task('earth-waterbodies-generate', async () => {
  const watersPath = path.join(folders.mapsDir, 'earth-waterbodies.geo.json');
  const lakesPath = path.join(folders.mapsDir, 'earth-lakes.geo.json');
  const riversPath = path.join(folders.mapsDir, 'earth-rivers.geo.json');
  const seasPath = path.join(folders.mapsDir, 'earth-seas.geo.json');

  const cmd = '-i combine-files ' + riversPath + ' ' + lakesPath + ' ' + seasPath + ' ' +
    '-merge-layers ' +
    '-o precision=0.000001 format=geojson ' + watersPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
