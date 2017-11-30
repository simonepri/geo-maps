'use strict';

const path = require('path');
const fs = require('fs-extra');
const del = require('del');

const gulp = require('gulp');

const replace = require('replace-in-files');
const version = require('project-version');

const folders = require('../folders');
const utils = require('../utils');

const sizes = require('../resolutions');
const maps = require('../maps');

/**
 * Setup maps to be published as signle packages.
 */
gulp.task('packages', async () => {
  await del(folders.pkgsDir);
  await fs.ensureDir(folders.pkgsDir);
  const npmDir = path.join(folders.pkgsDir, 'npm');

  const managers = ['npm'];

  for (const manager of managers) {
    for (const map of maps) {
      const bar = utils.processProgress([manager, map].join('-'), Object.keys(sizes).length);

      const tplMapDir = path.join(folders.tplDir, manager, map);
      for (const size of Object.keys(sizes)) {
        const buildMapDir = path.join(folders.buildDir, map, size);
        const outMapDir = path.join(npmDir, map, size);

        // eslint-disable-next-line no-await-in-loop
        await fs.copy(tplMapDir, outMapDir);
        // eslint-disable-next-line no-await-in-loop
        await fs.copy(buildMapDir, outMapDir);

        const replOpts = {
          to: size,
          files: outMapDir + '/**',
          optionsForFile: {ignore: [outMapDir + '/*.geo.json']}
        };

        replOpts.from = /\{\{resolution\}\}/g;
        replOpts.to = size;
        // eslint-disable-next-line no-await-in-loop
        await replace(replOpts);

        replOpts.from = /\{\{version\}\}/g;
        replOpts.to = version;
        // eslint-disable-next-line no-await-in-loop
        await replace(replOpts);

        bar.tick();
      }
    }
  }
});
