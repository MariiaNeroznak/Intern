"use strict";

/*  Create a function which takes an array and returns an array with all duplicates removed. */

export function removeDublicates1(arr) {
  // console.log(arr);
  if (!arr) return;
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const j = arr.indexOf(arr[i], i + 1);
    // console.log(arr + " => " + i + ": " + arr[i] + " => " + j);
    if (j > 0) {
      arr.splice(j, 1);
      i--;
    }
  }
  // console.log("result: " + arr);
  return arr;
}

export function removeDublicates2(arr) {
  if (!arr) return;
  let uniqueChars = [];
  arr.forEach((c) => {
    if (!uniqueChars.includes(c)) uniqueChars.push(c);
  });
  return uniqueChars;
}

export function removeDublicates3(arr) {
  return arr?.filter((c, index) => arr.indexOf(c) === index);
}

export function removeDublicates4(arr) {
  // if (!arr) return;
  return arr?.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
}

export function removeDublicates(arr) {
  if (!arr) return;
  return [...new Set(arr)];
}

// module.exports = removeDublicates;
