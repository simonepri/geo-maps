const request = require('request');
const pify = require('pify');
const wait = require('wait-then');
const rand = require('random-int');

const ProgressBar = require('ascii-progress');

const countries = require('./osm-countries.json');

let last = Date.now();

function postGeoJson(osmid, params) {
  const API_POST_GEO = 'http://polygons.openstreetmap.fr/?id=<id>';

  const opts = {
    headers: {
      origins: 'http://polygons.openstreetmap.fr',
      referer: 'http://polygons.openstreetmap.fr?id=' + osmid
    },
    url: API_POST_GEO.replace('<id>', osmid),
    form: params
  };

  let delta = 1000 - (Date.now() - last) + rand(1000);
  if (delta < 0) {
    delta = 0;
  }

  return new Promise((resolve, reject) => {
    wait(delta)
      .then(() => {
        last = Date.now();
        pify(request.post)(opts)
          .then(response => {
            if (response && response.body && response.body.indexOf('Exception') !== -1) {
              reject(new Error(response));
              return;
            }
            resolve();
          })
          .catch(() => {
            postGeoJson(osmid, params)
              .then(resolve)
              .catch(reject);
          });
      });
  });
}

function getGeoJson(osmid, params) {
  const API_GET_GEO = 'http://polygons.openstreetmap.fr/get_geojson.py?id=<id>&params=<ps>';

  let osmpar = '0';
  if (params && params.x && params.y && params.z) {
    osmpar = [params.x, params.y, params.z].join('-').toString();
  }

  const opts = {
    url: API_GET_GEO.replace('<id>', osmid).replace('<ps>', osmpar)
  };

  let delta = 100 - (Date.now() - last) + rand(100);
  if (delta < 0) {
    delta = 0;
  }

  return new Promise((resolve, reject) => {
    wait(delta)
      .then(() => {
        last = Date.now();
        return pify(request)(opts);
      })
      .then(response => {
        if (!response || !response.body || response.statusCode !== 200) {
          getGeoJson(osmid, params)
            .then(resolve)
            .catch(reject);
          return;
        }
        if (response.body.substr(0, 4) === 'None') {
          postGeoJson(osmid, params).then(() => getGeoJson(osmid, params))
            .then(resolve)
            .catch(reject);
          return;
        }
        try {
          const geojson = JSON.parse(response.body);
          resolve(geojson);
        } catch (err) {
          getGeoJson(osmid, params)
            .then(resolve)
            .catch(reject);
        }
      })
      .catch(() => {
        getGeoJson(osmid, params)
          .then(resolve)
          .catch(reject);
      });
  });
}

function getImageDiff(osmid, params) {
  const API_GET_GEO = 'http://polygons.openstreetmap.fr/get_image.py?id=<id>&params=<ps>';

  let osmpar = '0';
  if (params && params.x && params.y && params.z) {
    osmpar = [params.x, params.y, params.z].join('-').toString();
  }

  const opts = {
    url: API_GET_GEO.replace('<id>', osmid).replace('<ps>', osmpar),
    encoding: null
  };

  let delta = 100 - (Date.now() - last) + rand(100);
  if (delta < 0) {
    delta = 0;
  }

  return new Promise((resolve, reject) => {
    wait(delta)
      .then(() => {
        last = Date.now();
        return pify(request)(opts);
      })
      .then(response => {
        if (!response || !response.body || (response.statusCode !== 200 && response.statusCode !== 500)) {
          getImageDiff(osmid, params)
            .then(resolve)
            .catch(reject);
          return;
        }
        if (response.statusCode === 500) {
          postGeoJson(osmid, params).then(() => getImageDiff(osmid, params))
            .then(resolve)
            .catch(reject);
          return;
        }
        resolve(response.body);
      })
      .catch(err => {
        if (err.code === 'ETIMEDOUT' || err.code === 'ENOTFOUND' || err.code === 'ECONNRESET') {
          getImageDiff(osmid, params)
            .then(resolve)
            .catch(reject);
          return;
        }
        reject(err);
      });
  });
}

/**
 * Generates a GeoJSON object of world countries' boundaries.
 * @param {string}  name Name shown near the progress bar
 * @param  {object} params Parameters for the postgis equation.
 *   Equation: ST_Simplify(ST_SnapToGrid(ST_Buffer(geom, X), Y), Z))
 * @return {object}  GeoJSON object
 */
function exportWorld(name, params) {
  const world = {type: 'FeatureCollection', features: []};
  const promises = [];
  const len = Object.keys(countries).length;
  const req = new ProgressBar({
    schema: 'EWS-' + name + ' [:bar] :current/:total :percent :elapseds :etas', total: len
  });
  const res = new ProgressBar({
    schema: 'EWE-' + name + ' [:bar] :current/:total :percent :elapseds :etas', total: len
  });

  Object.keys(countries).forEach(key => {
    const osmid = countries[key];
    promises.push(
      new Promise((resolve, reject) => {
        req.tick();
        getGeoJson(osmid, params[key] || params.default)
          .then(geoJson => {
            res.tick();
            world.features.push({
              type: 'Feature',
              properties: {ISO_A3: key},
              geometry: geoJson
            });
            resolve();
          })
          .catch(reject);
      })
    );
  });

  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then(() => resolve(world))
      .catch(reject);
  });
}
/**
 * Generates an array of PNG images with countries' boundaries simplification
 * error.
 * @param {string}  name Name shown near the progress bar
 * @param  {object} params Parameters for the postgis equation.
 *   Equation: ST_Simplify(ST_SnapToGrid(ST_Buffer(geom, X), Y), Z))
 * @return {array}  Array of images.
 */
function exportDiff(name, params) {
  const world = [];
  const promises = [];
  const len = Object.keys(countries).length;
  const req = new ProgressBar({
    schema: 'EWS-' + name + ' [:bar] :current/:total :percent :elapseds :etas', total: len
  });
  const res = new ProgressBar({
    schema: 'EWE-' + name + ' [:bar] :current/:total :percent :elapseds :etas', total: len
  });

  Object.keys(countries).forEach(key => {
    const osmid = countries[key];
    promises.push(
      new Promise((resolve, reject) => {
        req.tick();
        getImageDiff(osmid, params[key] || params.default)
          .then(png => {
            res.tick();
            world.push({name: key, data: png});
            resolve();
          })
          .catch(reject);
      })
    );
  });

  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then(() => resolve(world))
      .catch(reject);
  });
}

module.exports = {
  exportWorld,
  exportDiff
};
