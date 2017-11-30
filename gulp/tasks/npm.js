'use strict';

const path = require('path');
const execa = require('execa');

const gulp = require('gulp');
const gutil = require('gulp-util');

const Confirm = require('prompt-confirm');

const folders = require('../folders');

const sizes = require('../resolutions');
const maps = require('../maps');

/**
 * Publish on npm.
 */
gulp.task('npm', async () => {
  let ans;
  const pkn = maps.length * Object.keys(sizes).length;
  await new Confirm('Are you sure to want to publish all the ' + pkn + ' npm packages?')
    .run().then(answer => {
      ans = answer;
    });

  if (!ans) {
    gutil.log('Release process interrupted!');
    return;
  }

  for (const map of maps) {
    const mapDir = path.join(folders.pkgsDir, 'npm', map);
    for (const size of Object.keys(sizes)) {
      gutil.log('Publishing @geo-maps/' + [map, size].join('-'));

      const packageDir = path.join(mapDir, size);
      const cmd = 'npm publish --access public';
      const proc = execa.shell(cmd, {cwd: packageDir});
      proc.stdout.pipe(process.stdout);
      process.stdin.pipe(proc.stdin);
      // eslint-disable-next-line no-await-in-loop
      await proc;
    }
  }
});
