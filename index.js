/*!
 * array-xor <https://github.com/jonschlinkert/array-xor>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var uniq = require('array-unique');
var diff = require('arr-diff');

function xor() {
  var len = arguments.length;
  var i = -1, res;

  while (++i < len) {
    var arr = arguments[i];
    if (Array.isArray(arr)) {
      if (res) {
        res = diff(res, arr).concat(diff(arr, res));
      } else {
        res = arr;
      }
    }
  }
  return res ? uniq(res) : [];
}

/**
 * Expose `xor`
 */

module.exports = xor;
