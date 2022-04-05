/* Write a function which takes a number x and returns a function, which takes another number y and returns the sum of numbers x and y. */

function getX(x) {
    return y => x + y;
}
console.log(getX(10));
console.log(getX(10)(2));
module.exports = getX;