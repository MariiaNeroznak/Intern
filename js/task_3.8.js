/* Create a simple function wrapper that will log every call to the wrapped function.
Example:
var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 } */

function myFunction() {}

var spied = spy(myFunction);
spied(1);
var report = spied.report(); // returns { totalCalls: 1 }

module.exports = myFunction;