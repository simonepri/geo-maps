'use strict';

const path = require('path');
const fs = require('fs-extra');

const gulp = require('gulp');

const folders = require('../folders');
const utils = require('../utils');

/**
 * Creates a valid GeoJSON file from the map in the tmp folder containing all
 * the countries maritime boundaries in a single file.
 */
gulp.task('countries-maritime-generate', async () => {
  const maritimePath = path.join(folders.mapsDir, 'countries-maritime.geo.json');
  const mapPath = path.join(folders.tmpDir, 'countries-map.json');
  const tmpMaritimePath = path.join(folders.tmpDir, 'countries-maritime.geo.json');

  const geoJsonMap = await fs.readJson(mapPath);
  const maritime = {type: 'FeatureCollection', features: []};

  for (const country of Object.keys(geoJsonMap)) {
    maritime.features.push({
      type: 'Feature',
      properties: {A3: country},
      geometry: geoJsonMap[country]
    });
  }

  await fs.outputJson(tmpMaritimePath, maritime);

  const cmd = '-i ' + tmpMaritimePath + ' ' +
    '-o precision=0.000001 format=geojson ' + maritimePath + ' ' +
    '-verbose';
  await utils.mapshaperCmd(cmd);
});
