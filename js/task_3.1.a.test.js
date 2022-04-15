import {range} from './task_3.1.a'
// const range = require("./task_3.1.a");

test("get range array from a to b", function () {
  expect(range(5, 9)).toEqual([5, 6, 7, 8]);
  expect(range(9, 2)).toBeUndefined();
  expect(range("s", 3)).toBeUndefined();
  expect(range("3", "8")).toEqual([3, 4, 5, 6, 7]);
  expect(range("8", "3")).toBeUndefined();
  expect(range(3.46, 9.2)).toEqual([3, 4, 5, 6, 7, 8]);
});
