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

module.exports = countPoints;
