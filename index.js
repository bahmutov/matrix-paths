var check = require('check-types');

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

module.exports.paths = function (grid) {
  verifyGrid(grid);
};