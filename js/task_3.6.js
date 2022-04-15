/* Write a function which takes a number x and returns a function, which takes another number y and returns the sum of numbers x and y. */

export function addX(x) {
  return (y) => x + y;
}
// console.log(addX(10));
// console.log(addX(10)(2));
// module.exports = addX;
