<a name="earth-lands"></a>
## Map of earth's lands
<p align="center">
  <a alt="see earth-lands on mapshaper" href="http://mapshaper.org/?files=https://cdn.rawgit.com/simonepri/geo-maps/master/previews/earth-lands.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-earth-lands-shape.png" width ="49%"/>
  </a>
  <a alt="see earth-lands on geojson.io" href="http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/simonepri/geo-maps/master/previews/earth-lands.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-earth-lands-hover.png" width ="49%"/>
  </a>
</p>

### Generation process
To export these maps we first wait [earth-coastlines](./earth-coastlines.md), [earth-lakes](./earth-lakes.md) and [earth-rivers](./earth-rivers.md) maps to be generated.  
Then we substract from the [earth-coastlines](./earth-coastlines.md) map the [earth-lakes](./earth-lakes.md) and [earth-rivers](./earth-rivers.md) maps using [mapshaper](https://github.com/mbloch/mapshaper)'s [erase](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-erase) feature.  
Finally we apply the [Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm#Algorithm) with different resolutions using [mapshaper](https://github.com/mbloch/mapshaper)'s [simplify](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-simplify) feature.

> You can find the source code of the exportation process [here](gulp/maps/earth-lands.js).

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
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-1m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-1m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-1m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-1m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-1m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-1m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-1m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-2m5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-2m5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-2m5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-2m5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-2m5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-2m5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-2m5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-5m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-5m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-5m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-5m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-5m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-5m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-5m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-10m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-10m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-10m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-10m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-10m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-10m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-10m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-25m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-25m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-25m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-25m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-25m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-25m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-25m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-50m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-50m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-50m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-50m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-50m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-50m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-50m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-100m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-100m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-100m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-100m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-100m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-100m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-100m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-250m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-250m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-250m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-250m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-250m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-250m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-250m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-500m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-500m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-500m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-500m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-500m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-500m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-500m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-1km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-1km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-1km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-1km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-1km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-1km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-1km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-2km5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-2km5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-2km5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-2km5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-2km5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-2km5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-2km5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-5km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-5km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-5km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-5km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-5km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-5km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-5km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#earth-lands">
        <img src="https://img.shields.io/badge/resolution-10km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/earth-lands-10km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#earth-lands">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/earth-lands-10km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/earth-lands-10km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/earth-lands-10km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/earth-lands-10km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/earth-lands-10km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>
</table>
