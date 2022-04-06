/* Create two versions of a calculator module:
a) Do not use any ES6 functionality
b) Use a ES6 class
Calculator should have four methods: add, subtract, multiply and divide. All of calculator methods should be chainable.
Example:
var calc = new Calculator(0);
amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10 */

const calcVal = {
    result: 0
}

function Calculator(starValue) {
    calcVal.result = starValue;

    this.add = (val) => {
        calcVal.result += val;
        return this;
    }
    this.multiply = (val) => {
        calcVal.result *= val;
        return this;
    }
    this.divide = (val) => {
        calcVal.result /= val;
        return this;
    }
    // [Symbol.toPrimitive] = (hint) => {
    //     return this.result;
    // }
    return this;
}
var calc = new Calculator(0);
let amount = calc.add(5).multiply(2).add(20).divide(3); //should return 10
console.log(amount);

module.exports = Calculator;