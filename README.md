<h1 align="center">
  <a href="https://github.com/simonepri/geo-maps"><img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps.jpg" alt="geo-maps" /></a>
</h1>
<div align="center">
  <a href="https://github.com/tmcw/awesome-geojson"><img src="https://awesome.re/mentioned-badge.svg" alt="awesome-geojson" /></a>
  <a href="http://geojson.org/"><img src="https://img.shields.io/badge/format-GeoJSON-e67e22.svg" alt="maps format" /></a>
  <a href="http://www.openstreetmap.org/"><img src="https://img.shields.io/badge/source-OSM-2ecc71.svg" alt="maps source" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/simonepri/geo-maps.svg" alt="software license" /></a>
  <a href="https://opendatacommons.org/licenses/odbl/1.0/"><img src="https://img.shields.io/badge/license-ODbL-2980b9.svg" alt="data license" /></a>
</div>
<br />
<div align="center">
  🗺 High Quality GeoJSON maps programmatically generated.
</div>
<div align="center">
  <sub>
    The only GeoJSON maps of the world you will ever need!
  </sub>
</div>

## Preview
Click on the images below to see some live examples of maps generated by this project.  

<center>
  <a alt="World Boundaries" href="http://geojson.io/#data=data:text/x-url,https://github.com/simonepri/geo-maps/releases/download/v0.2.0/countries-coastline-10km.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-countries-coastline.png" width ="45%"/>
  </a>
  <a alt="World Boundaries" href="http://geojson.io/#data=data:text/x-url,https://github.com/simonepri/geo-maps/releases/download/v0.2.0/countries-maritime-10km.geo.json">
    <img src="https://raw.githubusercontent.com/simonepri/geo-maps/master/media/geo-maps-countries-maritime.png" width ="45%"/>
  </a>
</center>

Please note that this example show you the worst resolutions available (for
speed reasons). You can find more maps below.


## Background
The purpose of this project is to **programmatically** extract maps from open
databases like [OpenStreetMap](www.openstreetmap.org) providing you
with a ready to use GeoJSON map that fits your needs.  
Feel free to propose new kind of maps! 🎉

## Maps
Below you can find different kind of maps divided by type and exported with
different precisions.  
Please note that for precision we mean the absolute error between the polygons
in the original map extracted from OSM and the ones we produce.

<hr></hr>

<h3 align="center">Map of countries' political maritime boundaries</h3>

Name | Precision | Size
-----|-----------|-----
[@geo-maps/countries-maritime-1m](maps/countries-maritime/1m) | 1 meters resolution | ~94.0 MB
[@geo-maps/countries-maritime-2m5](maps/countries-maritime/2m5) | 2.5 meters resolution | ~87.4 MB
[@geo-maps/countries-maritime-5m](maps/countries-maritime/5m) | 5 meters resolution | ~79.2 MB
[@geo-maps/countries-maritime-10m](maps/countries-maritime/10m) | 10 meters resolution | ~67.2 MB
[@geo-maps/countries-maritime-25m](maps/countries-maritime/25m) | 25 meters resolution | ~47.0 MB
[@geo-maps/countries-maritime-50m](maps/countries-maritime/50m) | 50 meters resolution | ~32.1 MB
[@geo-maps/countries-maritime-100m](maps/countries-maritime/100m) | 100 meters resolution | ~20.6 MB
[@geo-maps/countries-maritime-250m](maps/countries-maritime/250m) | 250 meters resolution | ~10.6 MB
[@geo-maps/countries-maritime-500m](maps/countries-maritime/500m) | 500 meters resolution | ~6.1 MB
[@geo-maps/countries-maritime-1km](maps/countries-maritime/1km) | 1000 meters resolution | ~3.4 MB
[@geo-maps/countries-maritime-2km5](maps/countries-maritime/2km5) | 2500 meters resolution | ~1.6 MB
[@geo-maps/countries-maritime-5km](maps/countries-maritime/5km) | 5000 meters resolution | ~0.9 MB
[@geo-maps/countries-maritime-10km](maps/countries-maritime/10km) | 10000 meters resolution | ~0.5 MB

<hr></hr>

<h3 align="center">Map of countries' political coastline boundaries</h3>

Name | Precision | Size
-----|-----------|-----
[@geo-maps/countries-coastline-1m](maps/countries-coastline/1m) | 1 meters resolution | ~146.7 MB
[@geo-maps/countries-coastline-2m5](maps/countries-coastline/2m5) | 2.5 meters resolution | ~140.7 MB
[@geo-maps/countries-coastline-5m](maps/countries-coastline/5m) | 5 meters resolution | ~133.1 MB
[@geo-maps/countries-coastline-10m](maps/countries-coastline/10m) | 10 meters resolution | ~122.5 MB
[@geo-maps/countries-coastline-25m](maps/countries-coastline/25m) | 25 meters resolution | ~103.4 MB
[@geo-maps/countries-coastline-50m](maps/countries-coastline/50m) | 50 meters resolution | ~89.2 MB
[@geo-maps/countries-coastline-100m](maps/countries-coastline/100m) | 100 meters resolution | ~72.7 MB
[@geo-maps/countries-coastline-250m](maps/countries-coastline/250m) | 250 meters resolution | ~41.3 MB
[@geo-maps/countries-coastline-500m](maps/countries-coastline/500m) | 500 meters resolution | ~21.1 MB
[@geo-maps/countries-coastline-1km](maps/countries-coastline/1km) | 1000 meters resolution | ~9.6 MB
[@geo-maps/countries-coastline-2km5](maps/countries-coastline/2km5) | 2500 meters resolution | ~3.3 MB
[@geo-maps/countries-coastline-5km](maps/countries-coastline/5km) | 5000 meters resolution | ~1.5 MB
[@geo-maps/countries-coastline-10km](maps/countries-coastline/10km) | 10000 meters resolution | ~0.8 MB

<hr></hr>

<h3 align="center">Map of earth's land territories</h3>

Name | Precision | Size
-----|-----------|-----
[@geo-maps/word-land-1m](maps/word-land/1m) | 1 meters resolution | ~66.7 MB
[@geo-maps/word-land-2m5](maps/word-land/2m5) | 2.5 meters resolution | ~66.7 MB
[@geo-maps/word-land-5m](maps/word-land/5m) | 5 meters resolution | ~66.7 MB
[@geo-maps/word-land-10m](maps/word-land/10m) | 10 meters resolution | ~66.6 MB
[@geo-maps/word-land-25m](maps/word-land/25m) | 25 meters resolution | ~66.4 MB
[@geo-maps/word-land-50m](maps/word-land/50m) | 50 meters resolution | ~65.3 MB
[@geo-maps/word-land-100m](maps/word-land/100m) | 100 meters resolution | ~60.1 MB
[@geo-maps/word-land-250m](maps/word-land/250m) | 250 meters resolution | ~42.1 MB
[@geo-maps/word-land-500m](maps/word-land/500m) | 500 meters resolution | ~28.0 MB
[@geo-maps/word-land-1km](maps/word-land/1km) | 1000 meters resolution | ~19.8 MB
[@geo-maps/word-land-2km5](maps/word-land/2km5) | 2500 meters resolution | ~15.5 MB
[@geo-maps/word-land-5km](maps/word-land/5km) | 5000 meters resolution | ~14.3 MB
[@geo-maps/word-land-10km](maps/word-land/10km) | 10000 meters resolution | ~13.9 MB

<hr></hr>

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/geo-maps/contributors) who participated in this project.

## License
All data of this project is licensed under the [Open Data Commons Public Domain Dedication and License](https://opendatacommons.org/licenses/odbl/1.0/) as stated in [OpenStreetMap License](http://www.openstreetmap.org/copyright)

All source code of this project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
