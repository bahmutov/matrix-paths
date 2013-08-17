module.exports = {
  paths: require('./src/paths').paths
};

var from = require('./src/pathsFrom').pathsFrom;
var G = [
['00', '01', '02', '03'],
['10', '11', '12', '13'],
['20', '21', '22', '23'],
['30', '31', '32', '33']];

var paths = from(G, 0, 0);
console.log(paths.length + ' paths from top left');