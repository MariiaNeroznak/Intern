"use strict";

/* Create two versions of a function called sum which takes a list of numbers and returns a sum of them.
a) Do not use any ES6 methods
b) Use a suitable ES6 method */
// ES6 methods

export function sum(...args) {
  let sum = 0;

  // sum = args.reduce((sum, item) => sum += (isNaN(+item) ? 0 : item), 0);
  for (let arg of args) {
    if (isNaN(+arg)) return;
    sum += +arg;
  }

  return sum;
}

// module.exports = sum;
