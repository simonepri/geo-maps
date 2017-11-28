'use strict';

const path = require('path');
const fs = require('fs-extra');

const gulp = require('gulp');

const osmCountries = require('osm-countries');
const osmGeoJson = require('osm-geojson');

const folders = require('../folders');

/**
 * Fetches the geojson of each country on the earth and export it in the tmp
 * folder in order to be used by others tasks.
 */
gulp.task('countries', async () => {
  const filePath = path.join(folders.tmpDir, 'countries-map.json');

  const countryMap = osmCountries.map();
  const geoJsonMap = await osmGeoJson.getAll(countryMap);

  await fs.outputJson(filePath, geoJsonMap);
});
