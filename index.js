'use strict';

const PolygonLookup = require('polygon-lookup');
const worldGeojson = require('./data/world.json');
const worldLookup = new PolygonLookup(worldGeojson);


/**
 * @param {LatLng} latlng
 * @returns ISO 3166 alpha-3 country code for geographic coordinates
 */
module.exports = function (latlng) {
  return worldLookup.search(latlng.lng, latlng.lat);
};
