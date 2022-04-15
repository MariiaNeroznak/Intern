/* Create two versions of a function called range which takes two numbers x and y and returns an array filled with all numbers from x (inclusive) to y (exclusive)
a) Do not use any ES6 methods
b) Use a suitable ES6 method */
// not ES6

export function range(x, y) {
  var resultArray = [];
  var min = Math.round(parseFloat(x));
  var max = Math.round(parseFloat(y));
  if (isNaN(min) || isNaN(max)) return;
  if (min > max) return;
  for (var i = min; i < max; i++) {
    resultArray.push(i);
  }
  return resultArray;
}

// module.exports = range;
