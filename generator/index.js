'use strict';
const fs = require('fs');
const path = require('path');

const pify = require('pify');

const generator = require('./generator');
const configs = require('./configs.json');

const BASE_DIR = path.join(__dirname, '../geojson');

/**
 * Counts the number of points in a GeoJSON object.
 * NB: Is not tested for all kind of GeoJSON entities.
 * @param  {object} geojson A valid GeoJSON object.
 * @return {number} The number of points
 */
function countPoints(geojson) {
  let count = 0;
  switch (geojson.type) {
    case 'FeatureCollection': {
      if (!geojson.features) {
        break;
      }
      geojson.features.forEach(f => {
        count += countPoints(f);
      });
      break;
    }
    case 'GeometryCollection': {
      if (!geojson.geometries) {
        break;
      }
      geojson.geometries.forEach(f => {
        count += countPoints(f);
      });
      break;
    }
    case 'Feature': {
      if (!geojson.geometry) {
        break;
      }
      count += countPoints(geojson.geometry);
      break;
    }
    case 'Polygon': case 'MultiPolygon': case 'Point': case 'MultiPoint': case 'LineString': case 'MultiLineString': {
      if (!geojson.coordinates) {
        break;
      }
      count += countPoints(geojson.coordinates);
      break;
    }
    default: {
      if (Array.isArray(geojson)) {
        geojson.forEach(gj => {
          count += countPoints(gj);
        });
      } else if (typeof geojson === 'number') {
        count++;
      }
    }
  }
  return count;
}

function saveGeo() {
  const plist = [];
  Object.keys(configs).forEach(size => {
    const uri = path.join(BASE_DIR, size, 'world.geo.json');
    console.log('Generating %s world', size);
    plist.push(
      generator.exportWorld(configs[size])
        .then(world => {
          console.log('%s world generated with %d points', size, countPoints(world));
          return pify(fs.writeFile)(uri, JSON.stringify(world));
        })
    );
  });
  return Promise.all(plist);
}

function saveDiffs() {
  const plist = [];
  Object.keys(configs).forEach(size => {
    console.log('Generating %s world differences', size);
    plist.push(
      generator.exportDiff(configs[size])
        .then(world => {
          const promises = [];
          console.log('%s world differences generated', size);
          world.forEach(country => {
            const uri = path.join(BASE_DIR, size, 'diffs', country.name + '.png');
            promises.push(pify(fs.writeFile)(uri, country.data));
          });
          return Promise.all(promises);
        })
      );
  });
  return Promise.all(plist);
}

saveGeo().then(() => saveDiffs()).catch(err => console.log(err));
