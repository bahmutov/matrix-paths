var pf = require('../pathsFrom').pathsFrom;

gt.module('paths in 2x2');

var m = [['a', 'b'], ['c', 'd']];

gt.test('2x2 top left', function () {
  var paths = pf(m, 0, 0);
  gt.array(paths, 'got arrays from 1x1');
  gt.equal(paths.length, 6, '6 ways');
  gt.ok(paths.every(function (path) {
    return path.length === 4;
  }));
});