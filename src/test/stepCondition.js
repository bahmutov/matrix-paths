var pf = require('../pathsFrom').pathsFrom;

gt.module('end condition');

var m = [['a', 'b'], ['c', 'd']];

gt.test('2x2 with max path length 2', function () {
  var paths = pf(m, 0, 0, {
    simple: true,
    stepWhile: function (path) {
      return path.length < 2;
    }
  });
  gt.equal(paths.length, 2, 'only 2 ways');
  gt.equal(paths[0], 'ac');
  gt.equal(paths[1], 'ab');
});