<a name="earth-coastlines"></a>
## Map of earth's coastlines
<p align="center">
  <a alt="see earth-coastlines on mapshaper" href="http://mapshaper.org/?files=https://cdn.rawgit.com/simonepri/geo-maps/master/previews/earth-coastlines.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-earth-coastlines-shape.png" width ="49%"/>
  </a>
  <a alt="see earth-coastlines on geojson.io" href="http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/simonepri/geo-maps/master/previews/earth-coastlines.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-earth-coastlines-hover.png" width ="49%"/>
  </a>
</p>

### Generation process
To export these maps we first download the simplified shapefile of lands polygons from the [OpenStreetMapData](http://openstreetmapdata.com/data/land-polygons) page.  
Then we project the shapefile to [EPSG:4326](http://spatialreference.org/ref/epsg/wgs-84/) coordinates using [mapshaper](https://github.com/mbloch/mapshaper)'s [project](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-proj) feature.  
Finally we apply the [Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm#Algorithm) with different resolutions using [mapshaper](https://github.com/mbloch/mapshaper)'s [simplify](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-simplify) feature.

> You can find the source code of the exportation process [here](gulp/maps/earth-coastlines.js).

### Downloads
Below you can find references to all the resolutions available for this kind of map.  
Click on badges to interact with them.

<table>
  <tr>
    <th>Resolution</th>
    <th>Preview</th>
    <th>Size</th>
    <th>GH Downloads</th>
    <th>NPM Downloads</th>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-1m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-1m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-1m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-1m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-1m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-1m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-1m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-2m5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-2m5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-2m5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-2m5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-2m5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-2m5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-2m5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-5m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-5m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-5m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-5m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-5m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-5m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-5m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-10m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-10m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-10m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-10m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-10m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-10m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-10m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-25m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-25m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-25m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-25m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-25m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-25m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-25m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-50m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-50m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-50m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-50m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-50m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-50m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-50m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-100m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-100m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-100m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-100m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-100m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-100m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-100m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-250m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-250m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-250m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-250m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-250m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-250m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-250m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-500m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-500m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-500m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-500m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-500m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-500m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-500m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-1km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-1km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-1km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-1km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-1km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-1km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-1km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-2km5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-2km5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-2km5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-2km5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-2km5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-2km5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-2km5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-5km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-5km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-5km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-5km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-5km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-5km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-5km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-coastlines">
        <img src="https://img.shields.io/badge/resolution-10km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-coastlines-10km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-coastlines">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-coastlines-10km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-coastlines-10km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-coastlines-10km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-coastlines-10km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-coastlines-10km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>
</table>
