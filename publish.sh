#!/bin/bash

read -p "Are you sure to want to publish the packages? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
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
fi
