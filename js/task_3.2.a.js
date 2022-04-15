/* Create two versions of a function called sum which takes a list of numbers and returns a sum of them.
a) Do not use any ES6 methods
b) Use a suitable ES6 method */
// not ES6

export function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (isNaN(Number(arguments[i]))) return;
    sum += +arguments[i];
  }
  return sum;
}

// module.exports = sum;
