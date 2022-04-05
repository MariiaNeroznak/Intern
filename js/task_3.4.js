'use strict';

/*  Create a function which takes an array and returns an array with all duplicates removed. */

function removeDublicates(arr) {
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

module.exports = removeDublicates;
