/* Create a simple function wrapper that will log every call to the wrapped function.
Example:
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 } */

const counter = {
  totalCalls: 0,
};

function myFunction() {
  console.log("here");
  this.totalCalls++;
}
function spy(func) {
  return func.bind(counter);
}

var spied = spy(myFunction);
spied();
var report = spied.report(); // returns { totalCalls: 1 }
console.log(report);

module.exports = myFunction;
