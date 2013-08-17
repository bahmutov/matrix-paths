var check = require('check-types');
var grid = require('./src/grid');

/*
function verifyGrid(grid) {
  check.verifyArray(grid, 'expecting an array of arrays');
  var rows = grid.length;
  grid.forEach(function (row, index) {
    check.verifyArray(row, 'expected array at ' + index);
    if (row.length !== rows) {
      throw new Error('Expected ' + rows + ' columns in row ' + index +
        ', found ' + row.length);
    }
  });
}

function inside(grid, row, column) {
  if (row < 0 || column < 0) { return false; }
  if (row >= grid.length) { return false; }
  if (column >= grid[row].length) { return false; }
  return true;
}
*/

var legalMoves = [
{x: -1, y: -1},
{x: 0, y: -1},
{x: 1, y: -1},

{x: -1, y: 0},
{x: -1, y: 0},

{x: -1, y: 1},
{x: 0, y: 1},
{x: 1, y: 1},
];

function dfs(grid, x, y, results, current) {
  if (grid[x][y].visited) {
    throw new Error('already visited grid at ' + x + ',' + y);
  }
  current = current || ''
  grid[x][y].visited = true;
  current += grid[x][y];

  console.log('visiting', x, y, 'current', current);

  // try moving to next position
  var deadEnd = true;
  legalMoves.forEach(function (move) {
    var toX = x + move.x;
    var toY = y + move.y;
    if (inside(grid, toX, toY)) {
      if (haveNotVisited(grid, toX, toY)) {
        deadEnd = false;
        dfs(grid, toX, toY, results, current);
      }
    }
  });

  if (deadEnd) {
    results.push(current);
  }
}

/** returns all paths starting from given location */
module.exports.pathsFrom = function (grid, x, y) {
  verifyGrid(grid);
  if (!inside(grid, x, y)) {
    throw new Error('invalid starting position ' + x + ',' + y);
  }

  var results = [];
  dfs(grid, x, y, results);

  return results;
}

/** returns paths from all starting locations in the grid */
module.exports.paths = function (grid) {
  verifyGrid(grid);
  return [];
};