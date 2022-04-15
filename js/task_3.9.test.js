// const sum = require("./task_3.9");
import {sum} from "./task_3.9";

test("check sum of array", () => {
  const arr = [10, 6, [4, 8], 3, [6, 5, [9]]];
  expect(sum(arr)).toBe(51);
});
