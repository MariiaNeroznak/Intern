/* Given an array with nested arrays of numbers (ex.: [10, 6, [4, 8], 3, [6, 5, [9]]]) create a function that would sum all numbers from provided array */

export function sum(aArr) {
  return aArr.reduce((sumVal, item) => {
    sumVal += Array.isArray(item) ? sum(item) : item;
    return sumVal;
  }, 0);
}

// sum([10, 6, [4, 8], 3, [6, 5, [9]]]);

// module.exports = sum;
