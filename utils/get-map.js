const request = require('request');
const pify = require('pify');
const wait = require('wait-then');
const rand = require('random-int');

const countries = require('./osm-countries.json');

let last = Date.now();

function getGeoJson(osmid) {
  const API_GET_GEO = 'http://polygons.openstreetmap.fr/get_geojson.py?id=' + osmid + '&params=0';
  const opts = {
    url: API_GET_GEO
  };

  let delta = 50 - (Date.now() - last) + rand(50);
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
        if (!response || !response.body || response.body.substr(0, 4) === 'None') {
          reject(new Error('Unable to get response for ' + osmid));
          return;
        }
        if (response.statusCode !== 200) {
          getGeoJson(osmid)
            .then(resolve)
            .catch(reject);
          return;
        }
        try {
          const geojson = JSON.parse(response.body);
          resolve(geojson);
        } catch (err) {
          getGeoJson(osmid)
            .then(resolve)
            .catch(reject);
        }
      })
      .catch(() => {
        getGeoJson(osmid)
          .then(resolve)
          .catch(reject);
      });
  });
}

/**
 * Generates a GeoJSON object of a country's boundaries.
 * @return {string} Code of the country using ISO 3166-1 alpha-3.
 */
function getCountry(alpha3) {
  const osmid = countries[alpha3];

  return new Promise((resolve, reject) => {
    getGeoJson(osmid)
      .then(geoJson => {
        resolve({
          type: 'Feature',
          properties: {ISO_A3: alpha3},
          geometry: geoJson
        });
      })
      .catch(reject);
  });
}

/**
 * Generates a GeoJSON object of world countries' boundaries.
 * @return {object}  GeoJSON object
 */
function getWorld() {
  const world = {type: 'FeatureCollection', features: []};
  const promises = [];

  Object.keys(countries).forEach(key => {
    promises.push(
      new Promise((resolve, reject) => {
        getCountry(key)
          .then(geoJson => {
            world.features.push(geoJson);
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
  getWorld,
  getCountry
};
