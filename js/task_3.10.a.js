/* Create two versions of a calculator module:
a) Do not use any ES6 functionality
b) Use a ES6 class
Calculator should have four methods: add, subtract, multiply and divide. All of calculator methods should be chainable.
Example:
var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10 */

export var Calculator = function (startVal) {
  startVal = parseFloat(startVal);
  if (!isNaN(startVal)) {
    this.startVal = startVal;
  } else this.startVal = 0;
};
Calculator.prototype = {
  add: function (val) {
    this.startVal += val;
    return this;
  },
  subtract: function (val) {
    this.startVal -= val;
    return this;
  },
  multiply: function (val) {
    this.startVal *= val;
    return this;
  },
  divide: function (val) {
    this.startVal /= val;
    return this;
  },
  // additional function to get result
  getResult: function () {
    return this.startVal;
  },
};

// var calc = new Calculator(0);
// var amount = calc.add(5).multiply(2).add(20).divide(3).getResult(); //should return 10
// console.log(amount);

// module.exports = Calculator;
