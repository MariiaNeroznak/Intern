/* Create a simple function wrapper that will log every call to the wrapped function.
Example:
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 } */

export function myFunction() {
  // console.log("here");
}

export function spy(func) {
  let counter = 0;
  function wrapper() {
    counter++;
    func();
  }
  wrapper.report = function () {
    return { totalCalls: counter };
  };
  return wrapper;
}

// var spied = spy(myFunction);
// spied();
// var report = spied.report(); // returns { totalCa    lls: 1 }
// console.log(report);

// module.exports = myFunction;
// module.exports = spy;
