"use strict";

const range = (x, y) => {
  var resultArray = [];
  var min = Math.round(parseFloat(x));
  var max = Math.round(parseFloat(y));
  if (isNaN(min) || isNaN(max)) return;
  if (min > max) return;
  for (var i = min; i < max; i++) {
    resultArray.push(i);
  }
  return resultArray;
};

module.exports = range;
