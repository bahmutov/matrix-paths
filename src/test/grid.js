var grid = require('../grid');

gt.module('grid inside');
var inside = grid.inside;

gt.test('basics', function () {
  gt.arity(inside, 3, 'takes 3 arguments')
});

gt.test('1x1 positive', function () {
  var G = [['a']];
  gt.ok(inside(G, 0, 0));
});

gt.test('1x1 negative', function () {
  var G = [['a']];
  gt.ok(!inside(G, 1, 0));
  gt.ok(!inside(G, 1, 1));
  gt.ok(!inside(G, -1, 0));
  gt.ok(!inside(G, -1, -1));
});