"use strict";

/* Write the definition of the function "say" in such way that calling this:
say("Hello,")("it’s me"); //Would return "Hello, it’s me"; */

function say2(str) {
  let text = str;
  function add(addStr) {
    text += addStr;
    return add;
  }
  add.toString = () => text;
  add.valueOf = () => 0;
  return add;
}
export function say(str) {
  return (addStr) => str + addStr;
}

// console.log(say2("Hello, ")("it's me").toString());
// console.log(+say2("Hello, ")("it's me"));
// console.log(say2("Hello, ")("it's me"));
// console.log(say("Hello, ")("it's me")(" and me").toString());

// module.exports = say;
