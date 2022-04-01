"use strict";

const sum = (...args) => {
    let sum = 0;
  
    for (let arg of args) {
        if (isNaN(+arg)) return;
        sum += +arg;
    }
    return sum;
  }
  
module.exports = sum;
  