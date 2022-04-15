/* Create two versions of a calculator module:
a) Do not use any ES6 functionality
b) Use a ES6 class
Calculator should have four methods: add, subtract, multiply and divide. All of calculator methods should be chainable.
Example:
var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10 */

export class Calculator {
  constructor(val) {
    val = parseFloat(val);
    if (!isNaN(val)) {
      this.result = val;
    } else this.result = 0;
  }
  add(val) {
    this.result += val;
    return this;
  }
  subtract(val) {
    this.result -= val;
    return this;
  }
  multiply(val) {
    this.result *= val;
    return this;
  }
  divide(val) {
    this.result /= val;
    return this;
  }
  getResult() {
    return this.result;
  }
}

// const calc = new Calculator(0);
// const amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10
// console.log(amount);

// module.exports = Calculator;
