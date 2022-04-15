// const addX = require("./task_3.6");
import {addX} from "./task_3.6";

test("check addX", () => {
  expect(addX(10)(2)).toBe(12);
  expect(addX(5)(4)).toBe(9);
  expect(addX(5)(5)).not.toBe(9);
  expect(addX(3).toString()).toBe("y => x + y");
});
