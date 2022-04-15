"use strict";

/* Create a function wordSearch(w) that searches to see whether a word w is present in the given text variable. Please note it has to be a full word and case insensitive */

const text =
  "dolor Lorem dolor ipsum dolor dolor sit amet consectetur, adipisicing elit. Eos laudantium, Dolor similique dolor esse delectus quod voluptas molestias iste quibusdam doloremque! Corrupti expedita inventore nemo aspernatur rem officiis nesciunt quae ipsum molestiae accusamus itaque, ipsam ullam explicabo quo sit aliquam beatae aut deserunt, voluptate, quia nihil cum impedit architecto! Est, quo numquam?";
export function wordSearch(w) {
  if (!w) return;
  let arr = [];
  let res;
  let str = text;
  let pos = 0;
  do {
    res = str.search(RegExp("\\b" + w + "\\b"));
    if (res >= 0) {
      pos += res;
      arr.push(pos);
      pos += w.length;
    }
    str = str.slice(res + w.length);
  } while (res >= 0);

  return arr;
  //   return text.search(RegExp("\\b"+ w +"\\b"));
}

// console.log(wordSearch("nemo"));
// console.log(wordSearch("dolor"));
// console.log(wordSearch("Dolor"));

// module.exports = wordSearch;
