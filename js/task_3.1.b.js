"use strict";

/* Create two versions of a function called range which takes two numbers x and y and returns an array filled with all numbers from x (inclusive) to y (exclusive)
a) Do not use any ES6 methods
b) Use a suitable ES6 method */
// ES6 methods

export const range = (x, y) => {
  let resultArray = [];
  const min = Math.round(parseFloat(x));
  const max = Math.round(parseFloat(y));
  if (isNaN(min) || isNaN(max)) return;
  if (min > max) return;
  for (let i = min; i < max; i++) {
    resultArray.push(i);
  }
  return resultArray;
};

// module.exports = range;
