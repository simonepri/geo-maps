#!/bin/bash

cd build
for m in *; do
  cd $m
  for r in *; do
    cd $r
    npm publish &
    cd ..
  fi
  cd ..
done
wait
