var check = require('check-types');

var verify = require('./grid').verify;
var inside = require('./grid').inside;

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

var visited = null;

function dfs(grid, x, y, results, current) {
  if (visited[x][y]) {
    throw new Error('already visited grid at ' + x + ',' + y);
  }
  current = current || ''
  visited[x][y] = true;
  current += grid[x][y];

  /*
  if (current.length > 3) {
    return;
  }
  */

  console.log('visiting', x, y, 'current', current);
  // console.dir(visited);

  // try moving to next position
  var deadEnd = true;
  legalMoves.forEach(function (move) {
    var toX = x + move.x;
    var toY = y + move.y;
    if (inside(grid, toX, toY)) {
      if (!visited[toX][toY]) {
        deadEnd = false;
        dfs(grid, toX, toY, results, current);
      }
    }
  });

  if (deadEnd) {
    console.log('dead end at', x, y, 'current', current);
    results.push(current);
  }
}

/** returns all paths starting from given location */
module.exports.pathsFrom = function (grid, x, y) {
  verify(grid);
  if (!inside(grid, x, y)) {
    throw new Error('invalid starting position ' + x + ',' + y);
  }

  var results = [];
  visited = [];
  visited.length = grid.length;
  grid.forEach(function (row, index) {
    visited[index] = [];
    visited[index].length = row.length;
  });
  dfs(grid, x, y, results);

  return results;
};