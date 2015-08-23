'use strict';

/* deps: mocha */
var assert = require('assert');
var xor = require('./');

describe('xor', function () {
  var a = [1, 2, 3, 5, 9];
  var b = [3, 4];
  var c = [3, 5, 9, 4];

  it('should return the symmetric difference of the given arrays:', function () {
    assert.deepEqual(xor(a), [1, 2, 3, 5, 9]);
    assert.deepEqual(xor(a, b), [1, 2, 5, 9, 4]);
    assert.deepEqual(xor(a, c), [1, 2, 4]);
    assert.deepEqual(xor(a, b, c), [1, 2, 3]);
  });
});
