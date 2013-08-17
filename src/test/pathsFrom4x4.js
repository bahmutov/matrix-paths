var pf = require('../pathsFrom').pathsFrom;

gt.module('paths in 4x4');

var m = [
['00', '01', '02', '03'],
['10', '11', '12', '13'],
['20', '21', '22', '23'],
['30', '31', '32', '33']];

gt.skip('4x4 top left', function () {
  var paths = pf(m, 0, 0);
  gt.array(paths, 'got arrays from 4x4');
  gt.equal(paths.length, 6, '6 ways');
  gt.ok(paths.every(function (path) {
    return path.length === 4;
  }));
});