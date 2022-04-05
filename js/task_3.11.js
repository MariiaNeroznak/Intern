'use strict';

// let say = function itself(str) {
//     this.text += str;
//     return itself;
// }
// say.text = "";
// say.toString = function () {
//     return this.text;
// }
function say(str) {
    let text = str;
    function add(addStr) {
        text += addStr;
        return add;
    }
    add.toString = function() {
        return text;
    }
    return add;
}

console.log(String(say("Hello, ")("it's me")));

module.exports = say;