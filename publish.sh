#!/bin/bash

printf "Are you sure to want to publish the packages [N/y]? "
read -r ans
if [[ $ans  =~ ^[Yy]$ ]]
then
  cd build
  for m in *; do
    cd $m
    for r in *; do
      cd $r
      npm publish &
      cd ..
    done
    cd ..
  done
fi
wait
