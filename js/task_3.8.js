/* Create a simple function wrapper that will log every call to the wrapped function.
Example:
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 } */

function myFunction() {
  console.log("here");
}

function spy(func) {
    var counter = 0;
    // var report = function () {return counter};
    function wrapper () {
        counter++;
        func();
    }
    wrapper.report = function () {return { totalCalls: counter }};
    return wrapper;
};

// var spied = spy(myFunction);
// spied();
// var report = spied.report(); // returns { totalCalls: 1 }
// console.log(report);

module.exports = spy;
