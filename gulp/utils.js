'use strict';

const pify = require('pify');

const mapshaper = require('mapshaper');

const ProgressBar = require('progress');

/**
 * Function to pass to download to show a progress bar while downloading.
 */
function downloadProgress(name) {
  const barOpts = {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: 1,
    clear: true
  };
  const bar = new ProgressBar('downloading ' + name + ' [:bar] :percent :elapseds speed: :KBpsKB/s eta: :etas', barOpts);
  bar.tick(0);

  return res => {
    bar.total = parseInt(res.headers['content-length'], 10);
    res.on('data', data => {
      const KBps = Math.floor(bar.curr / ((Date.now() - bar.start) / 1000) / 1024 / 8);
      bar.tick(data.length, {KBps});
    });
  };
}

/**
 * Function used to show the state of the processing while performing the
 * compression and other tasks.
 */
function processProgress(name, size) {
  const barOpts = {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: size,
    clear: true
  };
  const bar = new ProgressBar('processing ' + name + ' [:bar] :current/:total :elapseds eta: :etas', barOpts);
  bar.tick(0);
  return bar;
}

/**
 * Function used to call mapshaper
 * @param {string} cmd Command to send pass to mapshaper.
 */
function mapshaperCmd(cmd) {
  /**
   * Triggers the Garbage Collector.
   */
  function rgc() {
    if (global.gc) {
      global.gc();
    }
  }

  rgc();
  return pify(mapshaper.runCommands)(cmd).then(() => {
    rgc();
  });
}

module.exports = {
  downloadProgress,
  processProgress,
  mapshaperCmd
};
