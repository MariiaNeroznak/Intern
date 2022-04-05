'use strict';

/* Write the definition of the function "say" in such way that calling this:
say("Hello,")("it’s me"); //Would return "Hello, it’s me"; */
function say(str) {
    return function(string2) {
        return add(str, string2);   
    }
}
function add(addStr, string2) {
    return addStr + string2;
}

// console.log(say("Hello, ")("it's me"));

module.exports = say;