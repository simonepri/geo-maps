#!/bin/bash
cd geojson/world/maritime
for file in *; do
  cd $file
  if [ $file != 'orig' ]; then
    npm publish &
  fi
  cd ..
done
wait
