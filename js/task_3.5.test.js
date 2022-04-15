// const wordSearch = require("./task_3.5");
import {wordSearch} from "./task_3.5";

test("check wordSearch", () => {
  expect(wordSearch("nemo")).toEqual([207]);
  expect(wordSearch("dolor")).toEqual([0, 12, 24, 30, 108]);
  expect(wordSearch("Dolor")).toEqual([92]);
  expect(wordSearch()).toBeUndefined();
});
