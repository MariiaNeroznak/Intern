/* Write a function sevenAte9 that removes each 9 that it is in between 7s.
sevenAte9('79712312') // returns '7712312'
sevenAte9('79797') // returns '777' */

export function sevenAte9(str) {
  let curIndex = 0;
  while (true) {
    curIndex = str.indexOf("797", curIndex);
    if (curIndex < 0) break;
    str = str.slice(0, curIndex + 1) + str.slice(curIndex + 2);
  }
  return str;
}

// module.exports = sevenAte9;
