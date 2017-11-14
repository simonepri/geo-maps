<h1 align="center">
  <a href="https://github.com/simonepri/world-countries-boundaries"><img src="https://github.com/simonepri/world-countries-boundaries/blob/master/media/geo-countries.jpg?raw=true" alt="geo-countries" /></a>
</h1>
<div align="center">
  <a href="http://geojson.org/"><img src="https://img.shields.io/badge/format-GeoJSON-e67e22.svg" alt="maps format" /></a>
  <a href="http://www.openstreetmap.org/"><img src="https://img.shields.io/badge/source-OSM-2ecc71.svg" alt="maps source" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/simonepri/world-countries-boundaries.svg" alt="software license" /></a>
  <a href="https://opendatacommons.org/licenses/odbl/1.0/"><img src="https://img.shields.io/badge/license-ODbL-2980b9.svg" alt="data license" /></a>
</div>
<br />
<div align="center">
  🗺 GeoJSON political boundaries of the entire world.
</div>
<div align="center">
  <sub>
    The only GeoJSON maps of the world you will ever need!
  </sub>
</div>

## Preview
You can see an example of map generated with this project clicking on the image
below.  
Please note that this example show you the worst resolution available (for
speed purposes).  
You can find more maps previews below.
[![World Boundaries](https://raw.githubusercontent.com/simonepri/world-countries-boundaries/master/media/geo-countries-map.png)](http://geojson.io/#data=data:text/x-url,https://raw.githubusercontent.com/simonepri/world-countries-boundaries/master/geojson/10km/world.geo.json)

## Background
The purpose of this project is to **progammatically** extract maps from open
databases like [OpenStreetMap](www.openstreetmap.org) and then providing you
with a ready to use GeoJSON map that fits your needs.  
Feel free to propose new kind of maps!

## Maps
Below you can find different kind of maps divided by type and exported in
different precisions.  
Please note that for precision we mean the absolute error between the polygons
in the original map extracted from OSM and the ones we produce.

### World maritime political boundaries
#### Extraction method
- For each country in  [osm-countries.json](https://github.com/simonepri/world-countries-boundaries/blob/master/utils/osm-countries.json) fetch its GeoJSON using [this](http://polygons.openstreetmap.fr/) OpenStreetMap API.  
- Collect all countries in a single GeoJSON.
- For each resolution apply the Visvalingam algorithm on the map using [mapshaper](https://github.com/mbloch/mapshaper).
- Export all generated maps to their respective folders.

#### Results
Name | Precision | Size
-----|-----------|-----
[@geo-cointries/world-maritime-1m](geojson/1m) | 1 meters resolution | ~95 MB
[@geo-cointries/world-maritime-2m5](geojson/2m5) | 2.5 meters resolution | ~88 MB
[@geo-cointries/world-maritime-5m](geojson/5m) | 5 meters resolution | ~80 MB
[@geo-cointries/world-maritime-10m](geojson/10m) | 10 meters resolution | ~68 MB
[@geo-cointries/world-maritime-25m](geojson/25m) | 25 meters resolution | ~48 MB
[@geo-cointries/world-maritime-50m](geojson/50m) | 50 meters resolution | ~33 MB
[@geo-cointries/world-maritime-100m](geojson/100m) | 100 meters resolution | ~21 MB
[@geo-cointries/world-maritime-250m](geojson/250m) | 250 meters resolution | ~11 MB
[@geo-cointries/world-maritime-500m](geojson/500m) | 500 meters resolution | ~6.5 MB
[@geo-cointries/world-maritime-1km](geojson/1km) | 1000 meters resolution | ~3.5 MB
[@geo-cointries/world-maritime-2km5](geojson/2km5) | 2500 meters resolution | ~1.5 MB
[@geo-cointries/world-maritime-5km](geojson/5km) | 5000 meters resolution | ~1 MB
[@geo-cointries/world-maritime-10km](geojson/10km) | 10000 meters resolution | ~0.5 MB

### World coastline political boundaries
I have planned to do this in the future is these maps will get enough interest
from the community. Please comment or react in this [issue](https://github.com/simonepri/world-countries-boundaries/issues/3) if you
are interested.  
Remove the sea from the boundaries provided by OSM is not an
easy task. In fact OSM does not provide coastline relations for countries.
The only way to achieve this result is to use coastline datas from other
databases trying to intersect the one obtained from OSM with the others.

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/world-countries-boundaries/contributors) who participated in this project.

## License
All data of this project is licensed under the [Open Data Commons Public Domain Dedication and License](https://opendatacommons.org/licenses/odbl/1.0/) as stated in [OpenStreetMap License](http://www.openstreetmap.org/copyright)

All source code of this project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
