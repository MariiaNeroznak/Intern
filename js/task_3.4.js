'use strict';

/*  Create a function which takes an array and returns an array with all duplicates removed. */

function removeDublicates(arr) {
    if (!arr) return;
    let filterArr = [];
    // let result = arr.filter(item => );
    return arr.reduce((prevVal, item, index, array) => {
        console.log(index);
        console.log(item);
        console.log(array.includes(item, index + 1));
        // array.splice(item, 1);
        // console.log(prevVal);
        // console.log(index);
        // console.log(array);
        // if (array.fi)
    }, 0);

    // console.log(result);
    // return [1, 2, 4, 6];
}
removeDublicates([1, 2, 4, 4, 6, 2]);
module.exports = removeDublicates;
