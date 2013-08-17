var verify = require('./grid').verify;
var pathsFrom = require('./pathsFrom').pathsFrom;

/** returns paths from all starting locations in the grid */
module.exports.paths = function (grid) {
  verify(grid);

  var results = [];
  grid.forEach(function (row, r) {
    row.forEach(function (item, c) {
      var str = pathsFrom(grid, r, c);
      results = results.concat(str);
    });
  })

  return results;
};