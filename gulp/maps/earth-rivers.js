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
gulp.task('earth-rivers-generate', async () => {
  const riversUrl = 'http://data.openstreetmapdata.com/river-polygons-reduced-3857.zip';

  const riversPath = path.join(folders.mapsDir, 'earth-rivers.geo.json');
  const tmpRiversDir = path.join(folders.tmpDir, 'earth-rivers');

  const shpRiversPath = path.join(tmpRiversDir, 'river_reduced_z6.shp');

  const dwnOpts = {
    extract: true,
    strip: 1,
    filter: file => file.path.indexOf('river_reduced_z6') !== -1
  };
  await download(riversUrl, tmpRiversDir, dwnOpts).on('response', utils.downloadProgress('earth-rivers'));

  const cmd = '-i ' + shpRiversPath + ' ' +
    '-filter-fields ' +
    '-proj +init=epsg:4326 ' +
    '-dissolve ' +
    '-o precision=0.000001 format=geojson ' + riversPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);

  await del(tmpRiversDir);
});
