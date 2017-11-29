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
gulp.task('earth-coastlines-generate', async () => {
  const landUrl = 'http://data.openstreetmapdata.com/simplified-land-polygons-complete-3857.zip';

  const coastlinesPath = path.join(folders.mapsDir, 'earth-coastlines.geo.json');
  const tmpCoastlinesDir = path.join(folders.tmpDir, 'earth-coeastlines');

  const shpLandPath = path.join(tmpCoastlinesDir, 'simplified_land_polygons.shp');

  const dwnOpts = {
    extract: true,
    strip: 1,
    filter: file => file.path.indexOf('simplified_land_polygons') !== -1
  };
  await download(landUrl, tmpCoastlinesDir, dwnOpts).on('response', utils.downloadProgress('earth-coastlines'));

  const cmd = '-i ' + shpLandPath + ' ' +
    '-filter-fields ' +
    '-proj +init=epsg:4326 ' +
    '-dissolve ' +
    '-o precision=0.000001 format=geojson ' + coastlinesPath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);

  await del(tmpCoastlinesDir);
});
