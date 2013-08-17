var pf = require('..').pathsFrom;

gt.module('paths from 1x1');

gt.test('basics', function () {
  gt.arity(pf, 3, 'expects 3 arguments');
});

gt.test('1x1', function () {
  var m = [['a']];
  var paths = pf(m, 0, 0);
  gt.array(paths, 'got arrays from 1x1');
  gt.equal(paths.length, 1, 'single string');
});