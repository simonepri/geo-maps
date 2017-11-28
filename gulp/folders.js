'use strict';

const root = require('app-root-path');

module.exports = {
  tmpDir: root.resolve('tmp'),
  mapsDir: root.resolve('maps'),
  distDir: root.resolve('dist'),
  buildDir: root.resolve('build'),
  pkgsDir: root.resolve('pkgs'),

  tplDir: root.resolve('tpls'),
  prevDir: root.resolve('previews')
};
