"use strict";
// The module test does not work without additional jest settings
// https://jestjs.io/docs/ecmascript-modules

export const getMyself = (a) => {
  return a;
};

console.log(getMyself(3));

// export { getMyself };
