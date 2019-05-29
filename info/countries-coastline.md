<a name="countries-coastline"></a>
## Map of countries' political coastline borders
<p align="center">
  <a alt="see countries-coastline on mapshaper" href="http://mapshaper.org/?files=https://cdn.rawgit.com/simonepri/geo-maps/master/previews/countries-coastline.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-countries-coastline-shape.png" width ="49%"/>
  </a>
  <a alt="see countries-coastline on geojson.io" href="http://geojson.io/#data=data:text/x-url,https://cdn.rawgit.com/simonepri/geo-maps/master/previews/countries-coastline.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-countries-coastline-hover.png" width ="49%"/>
  </a>
</p>

### Generation process
To export these maps we first wait [countries-maritime](./countries-maritime.md) and [earth-coastlines](./earth-coastlines.md) maps to be generated.  
Then we clip from [countries-maritime](./countries-maritime.md) the [earth-coastlines](./earth-coastlines.md) using [mapshaper](https://github.com/mbloch/mapshaper)'s [clip](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-clip) feature.  
Finally we apply the [Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm#Algorithm) with different resolutions using [mapshaper](https://github.com/mbloch/mapshaper)'s [simplify](https://github.com/mbloch/mapshaper/wiki/Command-Reference#-simplify) feature.

> You can find the source code of the exportation process [here](gulp/maps/countries-coastline.js).

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
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-1m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-1m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-1m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-1m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-1m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-1m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-1m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-2m5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-2m5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-2m5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-2m5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-2m5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-2m5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-2m5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-5m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-5m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-5m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-5m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-5m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-5m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-5m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-10m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-10m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-10m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-10m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-10m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-10m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-10m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-25m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-25m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-25m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-25m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-25m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-25m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-25m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-50m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-50m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-50m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-50m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-50m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-50m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-50m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-100m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-100m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-100m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-100m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-100m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-100m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-100m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-250m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-250m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-250m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-250m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-250m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-250m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-250m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-500m-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-500m/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-500m/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-500m.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-500m.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-500m">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-500m.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-1km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-1km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-1km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-1km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-1km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-1km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-1km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-2km5-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-2km5/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-2km5/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-2km5.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-2km5.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-2km5">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-2km5.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-5km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-5km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-5km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-5km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-5km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-5km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-5km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>

  <tr>
    <td>
      <a href="#countries-coastline">
        <img src="https://img.shields.io/badge/resolution-10km-f1c40f.svg" alt="map resolution"/>
      </a>
    </td>
    <td>
      <a href="http://mapshaper.org/?files=https://unpkg.com/@geo-maps/countries-coastline-10km/map.geo.json">
        <img src="https://img.shields.io/badge/preview-mapshaper-1abc9c.svg" alt="map preview"/>
      </a>
    </td>
    <td>
      <a href="#countries-coastline">
        <img src="http://img.badgesize.io/https://unpkg.com/@geo-maps/countries-coastline-10km/map.geo.json" alt="file size"/>
      </a>
    </td>
    <td>
      <a href="https://github.com/simonepri/geo-maps/releases/latest/download/countries-coastline-10km.geo.json">
        <img src="https://img.shields.io/github/downloads/simonepri/geo-maps/latest/countries-coastline-10km.geo.json.svg" alt="github downloads"/>
      </a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/@geo-maps/countries-coastline-10km">
        <img src="https://img.shields.io/npm/dm/@geo-maps/countries-coastline-10km.svg" alt="npm downloads"/>
      </a>
    </td>
  </tr>
</table>
