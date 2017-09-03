const request = require('request');
const pify = require('pify');
const wait = require('wait-then');
const rand = require('random-int');

const countries = require('./osm-countries.json');

let last = Date.now();

function postGeoJson(osmid, params) {
  const API_POST_GEO = 'http://polygons.openstreetmap.fr/?id=<id>';
  let delta = 1500 - (Date.now() - last) + rand(1500);
  if (delta < 0) {
    delta = 0;
  }

  return new Promise((resolve, reject) => {
    wait(delta)
      .then(() => {
        last = Date.now();
        return pify(request.post)({url: API_POST_GEO.replace('<id>', osmid), form: params});
      })
      .then(resolve)
      .catch(reject);
  });
}

function getGeoJson(osmid, params) {
  const API_GET_GEO = 'http://polygons.openstreetmap.fr/get_geojson.py?id=<id>&params=<ps>';
  let delta = 100 - (Date.now() - last) + rand(100);
  if (delta < 0) {
    delta = 0;
  }

  let osmpar = '0';
  if (params && params.x && params.y && params.z) {
    osmpar = [params.x, params.y, params.z].join('-').toString();
  }
  return new Promise((resolve, reject) => {
    wait(delta)
      .then(() => {
        last = Date.now();
        return pify(request)(API_GET_GEO.replace('<id>', osmid).replace('<ps>', osmpar));
      })
      .then(response => {
        if (response && response.statusCode === 504) {
          getGeoJson(osmid, params)
            .then(resolve)
            .catch(reject);
          return;
        }
        if (response.body && response.body.substr(0, 4) === 'None') {
          postGeoJson(osmid, params).then(() => getGeoJson(osmid, params))
            .then(resolve)
            .catch(reject);
          return;
        }
        try {
          const geojson = JSON.parse(response.body);
          resolve(geojson);
        } catch (err) {
          reject(new Error(JSON.stringify(response)));
        }
      })
      .catch(reject);
  });
}

/**
 * Generates a GeoJSON object of world countries' boundaries.
 * @param  {object} params Parameters for the postgis equation.
 *   Equation: ST_Simplify(ST_SnapToGrid(ST_Buffer(geom, X), Y), Z))
 * @return {object}  GeoJSON object
 */
function exportWorld(params) {
  const world = {type: 'FeatureCollection', features: []};
  const promises = [];

  Object.keys(countries).forEach(key => {
    const osmid = countries[key];
    promises.push(
      new Promise((resolve, reject) => {
        getGeoJson(osmid, params)
          .then(geoJson => {
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

module.exports = exportWorld;
