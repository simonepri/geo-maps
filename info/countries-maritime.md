## Map of countries' political maritime borders
<p align="center">
  <a alt="see countries-maritime on mapshaper" href="http://mapshaper.org/?files=https://cdn.rawgit.com/simonepri/geo-maps/next/preview/countries-maritime.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/next/media/geo-maps-countries-maritime-shape.png" width ="49%"/>
  </a>
  <a alt="see countries-maritime on geojson.io" href="http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/simonepri/geo-maps/next/preview/countries-maritime.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/next/media/geo-maps-countries-maritime-hover.png" width ="49%"/>
  </a>
</p>

### Generation process
To export these maps we retrieve the list of countries with [osm-countries](https://github.com/simonepri/osm-countries) and for each country, we fetch its GeoJSON using
[osm-geojson](https://github.com/simonepri/osm-geojson).  
Then we collect all GeoJSONs in a single GeoJSON on which we apply the [Visvalingam algorithm](https://bost.ocks.org/mike/simplify/) with different resolutions using [mapshaper](https://github.com/mbloch/mapshaper)'s [simplify](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-simplify) feature.

> You can find the source code of the exportation process [here](gulp/maps/countries-maritime.js).

### Getting started
TODO

### Downloads
Below you can find the download to all the resolutions available for this kind of map.  
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
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-1m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-1m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-1m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-1m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-1m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-1m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-1m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-2m5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-2m5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-2m5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-2m5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-2m5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-2m5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-2m5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-5m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-5m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-5m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-5m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-5m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-5m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-5m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-10m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-10m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-10m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-10m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-10m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-10m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-10m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-25m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-25m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-25m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-25m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-25m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-25m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-25m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-50m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-50m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-50m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-50m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-50m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-50m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-50m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-100m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-100m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-100m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-100m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-100m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-100m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-100m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-250m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-250m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-250m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-250m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-250m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-250m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-250m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-500m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-500m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-500m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-500m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-500m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-500m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-500m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-1km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-1km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-1km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-1km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-1km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-1km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-1km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-2km5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-2km5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-2km5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-2km5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-2km5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-2km5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-2km5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-5km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-5km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-5km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-5km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-5km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-5km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-5km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-maritime">
        <img src="https://img.shields.io/badge/resolution-10km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-maritime-10km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-maritime">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-maritime-10km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/download/v0.5.0/countries-maritime-10km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-maritime-10km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-maritime-10km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-maritime-10km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>
</table>

### Conversion to other formats
If you need to convert maps in any of Shapefile, TopoJSON, CSV, SVG formats you can click on the preview badge of the map of your interest and use the mapshaper's web interface to export the map in the format of your need.
