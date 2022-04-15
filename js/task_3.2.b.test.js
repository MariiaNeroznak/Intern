// const sum = require("./task_3.2.b");
import { sum } from './task_3.2.b';

test("get range array from a to b", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1)).toBe(1);
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum("s", 1)).toBeUndefined();
  expect(sum("3", "8")).toBe(11);
  expect(sum(1, "2", 4)).toBe(7);
  expect(sum()).toBe(0);
  expect(sum(-1, 5)).toBe(4);
  const arr = [1, 2, 3, 4, 5];
  expect(sum(...arr)).toBe(15);
  const arr2 = [15, 20, 1];
  expect(sum(...arr, ...arr2)).toBe(51);
});
