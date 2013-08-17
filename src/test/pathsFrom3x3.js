var pf = require('../pathsFrom').pathsFrom;

gt.module('paths in 3x3');

var m = [
['00', '01', '02'],
['10', '11', '12'],
['20', '21', '22']];

gt.test('3x3 top left', function () {
  var paths = pf(m, 0, 0);
  gt.array(paths, 'got arrays from 3x3');
  gt.ok(paths.length > 100, 'lots of ways');
  gt.ok(paths.every(function (path) {
    return path.length <= 9*2;
  }));
});