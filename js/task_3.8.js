/* Create a simple function wrapper that will log every call to the wrapped function.
Example:
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 } */

function myFunction() {
  console.log("here");
}

// var spy = function (func) {
//     var counter = 0;
//     function makeFunction () {
//         counter++;
//         func();
//     }
//     return {
//         report: function () {
//             return {totalCalls: counter}
//         }
//     }
// }
function spy(func) {
    var counter = 0;
    // var report = function () {return counter};
    function wrapper () {
        this.counter++;
        func();
    }
    return wrapper;
};

var spied = spy(myFunction);
spied();
var report = spied.report(); // returns { totalCalls: 1 }
console.log(report);


console.log(getCode());    // Returns the apiCode

module.exports = myFunction;
