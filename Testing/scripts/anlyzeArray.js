function analyzeArray(arr) {
  return {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

function average(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  return Math.max(...arr);
}

module.exports = analyzeArray;
