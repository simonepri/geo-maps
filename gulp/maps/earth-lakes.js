'use strict';

const path = require('path');
const del = require('del');
const download = require('download');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the OSM lakes map in the tmp folder.
 */
gulp.task('earth-lakes-generate', async () => {
  const lakesUrl = 'http://data.openstreetmapdata.com/lakes-polygons-reduced-3857.zip';

  const lakesPath = path.join(folders.mapsDir, 'earth-lakes.geo.json');
  const tmpLakesDir = path.join(folders.tmpDir, 'earth-lakes');

  const shpLakesPath = path.join(tmpLakesDir, 'lakes_reduced_z5.shp');

  const dwnOpts = {
    extract: true,
    strip: 1,
    filter: file => file.path.indexOf('lakes_reduced_z5') !== -1
  };
  await download(lakesUrl, tmpLakesDir, dwnOpts).on('response', utils.downloadProgress('earth-lakes'));

  const cmd = '-i ' + shpLakesPath + ' ' +
    '-filter-fields ' +
    '-proj +init=epsg:4326 ' +
    '-dissolve ' +
    '-o precision=0.000001 format=geojson ' + lakesPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);

  await del(tmpLakesDir);
});
