'use strict';

const path = require('path');
const fs = require('fs-extra');
const pify = require('pify');
const del = require('del');
const download = require('download');
const replace = require('replace-in-files');
const version = require('project-version');

const gulp = require('gulp');

const mapshaper = require('mapshaper');
const osmCountries = require('osm-countries');
const osmGeoJson = require('osm-geojson');

const ProgressBar = require('ascii-progress');

const tmpDir = path.join(__dirname, 'tmp');
const tplDir = path.join(__dirname, 'tpl');
const buildDir = path.join(__dirname, 'build');
const distDir = path.join(__dirname, 'dist');
const pkgsDir = path.join(__dirname, 'pkgs');
const prevDir = path.join(__dirname, 'preview');

const sizes = {
  '1m': '1',
  '2m5': '2.5',
  '5m': '5',
  '10m': '10',
  '25m': '25',
  '50m': '50',
  '100m': '100',
  '250m': '250',
  '500m': '500',
  '1km': '1000',
  '2km5': '2500',
  '5km': '5000',
  '10km': '10000'
};

const precision = {
  '1m': '0.000001',
  '2m5': '0.00001',
  '5m': '0.00001',
  '10m': '0.00001',
  '25m': '0.0001',
  '50m': '0.0001',
  '100m': '0.0001',
  '250m': '0.001',
  '500m': '0.001',
  '1km': '0.001',
  '2km5': '0.01',
  '5km': '0.01',
  '10km': '0.01'
};

/**
 * Fetches the geojson of each country on the earth and export it in the tmp
 * folder in order to be used by other tasks.
 */
gulp.task('get-countries', async () => {
  const countryMap = osmCountries.map();

  const geoJsonMap = await osmGeoJson.getAll(countryMap);

  const filePath = path.join(tmpDir, 'countries-map.json');

  await fs.outputJson(filePath, geoJsonMap);
});

/**
 * Creates a valid GeoJSON file from the OSM land map in the tmp folder.
 */
gulp.task('generate-world-land', async () => {
  const landPath = path.join(tmpDir, 'world-land.geo.json');

  const tmpLandDir = path.join(tmpDir, 'world-land');
  const prjLandPath = path.join(tmpLandDir, 'simplified_land_polygons.prj');
  const shpLandPath = path.join(tmpLandDir, 'simplified_land_polygons.shp');
  const dataUrl = 'http://data.openstreetmapdata.com/simplified-land-polygons-complete-3857.zip';

  const opts = {
    extract: true,
    strip: 1
  };
  await download(dataUrl, tmpLandDir, opts);

  const cmd = '-i ' + shpLandPath + '  -proj from=' + prjLandPath + ' +init=EPSG:4326 -dissolve -clean -o precision=0.000001 format=geojson ' + landPath;

  await pify(mapshaper.runCommands)(cmd);
  await del(tmpLandDir);
});

/**
 * Creates a valid GeoJSON file from the map in the tmp folder containing all
 * the countries maritime boundaries in a single file.
 */
gulp.task('generate-countries-maritime', async () => {
  const mapPath = path.join(tmpDir, 'countries-map.json');
  const geoJsonMap = await fs.readJson(mapPath);
  const maritime = {type: 'FeatureCollection', features: []};

  for (const country of Object.keys(geoJsonMap)) {
    maritime.features.push({
      type: 'Feature',
      properties: {A3: country},
      geometry: geoJsonMap[country]
    });
  }

  const maritimePath = path.join(tmpDir, 'countries-maritime.geo.json');

  await fs.outputJson(maritimePath, maritime);

  const cmd = '-i ' + maritimePath + ' -clean -o force precision=0.000001 format=geojson ' + maritimePath;
  await pify(mapshaper.runCommands)(cmd);
});

/**
 * Creates a valid GeoJSON file from the map in the tmp folder containing all
 * the countries coastline boundaries in a single file.
 */
gulp.task('generate-countries-coastline', async () => {
  const mapPath = path.join(tmpDir, 'countries-map.json');
  const landPath = path.join(tmpDir, 'world-land.geo.json');

  const geoJsonMap = await fs.readJson(mapPath);

  const world = {type: 'FeatureCollection', features: []};

  for (const country of Object.keys(geoJsonMap)) {
    world.features.push({
      type: 'Feature',
      properties: {A3: country},
      geometry: geoJsonMap[country]
    });
  }

  const costlinePath = path.join(tmpDir, 'countries-coastline.geo.json');

  await fs.outputJson(costlinePath, world);

  const cmd = '-i ' + costlinePath + ' -clip ' + landPath + ' -clean -o force precision=0.000001 format=geojson ' + costlinePath;
  await pify(mapshaper.runCommands)(cmd);
});

/**
 * Generates one map for each different resolution available of the maps in then
 * tmp folder.
 */
gulp.task('compress', async () => {
  const maps = ['countries-maritime', 'countries-coastline', 'world-land'];

  for (const map of maps) {
    const bar = new ProgressBar({
      schema: map + ': [:bar] :current/:total :percent :elapseds ETA: :etas',
      total: Object.keys(sizes).length
    });
    for (const size of Object.keys(sizes)) {
      const mapPath = path.join(tmpDir, map + '.geo.json');
      const outMapDir = path.join(buildDir, map, size);
      const outMapPath = path.join(outMapDir, 'map.geo.json');
      const cmd = '-i ' + mapPath + ' -simplify keep-shapes interval=' + sizes[size] + ' -clean -o precision=' + precision[size] + ' format=geojson bbox prettify ' + outMapPath;

      // eslint-disable-next-line no-await-in-loop
      await fs.ensureDir(outMapDir);
      // eslint-disable-next-line no-await-in-loop
      await pify(mapshaper.runCommands)(cmd);
      bar.tick();
    }
    bar.clear();
  }
});

/**
 * Copy an example of each type of maps in the preview folder to be used
 * to show a live preview of the maps.
 */
gulp.task('preview', async () => {
  const maps = ['countries-maritime', 'countries-coastline', 'world-land'];
  for (const map of maps) {
    const inMapFile = 'map.geo.json';
    const outFile = map + '.geo.json';

    const inMapDir = path.join(buildDir, map, '10km');

    const inMapPath = path.join(inMapDir, inMapFile);
    const outMapPath = path.join(prevDir, outFile);

    // eslint-disable-next-line no-await-in-loop
    await fs.copy(inMapPath, outMapPath);
  }
});

/**
 * Setup maps to be published as signle packages.
 */
gulp.task('pkgs', async () => {
  const maps = ['countries-maritime', 'countries-coastline', 'world-land'];

  await fs.copy(buildDir, pkgsDir);

  for (const map of maps) {
    const bar = new ProgressBar({
      schema: map + ': [:bar] :current/:total :percent :elapseds ETA: :etas',
      total: Object.keys(sizes).length
    });
    const tplMapDir = path.join(tplDir, map);
    for (const size of Object.keys(sizes)) {
      const outMapDir = path.join(pkgsDir, map, size);
      // eslint-disable-next-line no-await-in-loop
      await fs.copy(tplMapDir, outMapDir);

      // eslint-disable-next-line no-await-in-loop
      await replace({
        from: /\{\{resolution\}\}/g,
        to: size,
        files: outMapDir + '/**',
        optionsForFile: {ignore: [outMapDir + '/*.geo.json']}
      });
      // eslint-disable-next-line no-await-in-loop
      await replace({
        from: /\{\{version\}\}/g,
        to: version,
        files: outMapDir + '/**',
        optionsForFile: {ignore: [outMapDir + '/*.geo.json']}
      });
      bar.tick();
    }
    bar.clear();
  }
});

/**
 * Populates the dist folder.
 */
gulp.task('dist', async () => {
  const maps = ['countries-maritime', 'countries-coastline', 'world-land'];

  for (const map of maps) {
    const bar = new ProgressBar({
      schema: map + ': [:bar] :current/:total :percent :elapseds ETA: :etas',
      total: Object.keys(sizes).length
    });
    for (const size of Object.keys(sizes)) {
      const inFile = 'map.geo.json';
      const outFile = [map, size].join('-') + '.geo.json';

      const inMapPath = path.join(buildDir, map, size, inFile);
      const outMapPath = path.join(distDir, outFile);

      // eslint-disable-next-line no-await-in-loop
      await fs.copy(inMapPath, outMapPath);
      bar.tick();
    }
    bar.clear();
  }
});

/**
 * Clean folders generated from the build process.
 */
gulp.task('clean', async () => {
  await del(tmpDir);
  await del(buildDir);
  await del(distDir);
  await del(pkgsDir);
});

/**
 * Execute the whole build process.
 */
gulp.task('build',
  gulp.series(
    'clean',
    'get-countries',
    'generate-world-land',
    'generate-countries-maritime',
    'generate-countries-coastline',
    'compress',
    'preview'
  )
);
