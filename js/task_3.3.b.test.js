import { getMotto } from './task_3.3.b';
// const getMotto = require("./task_3.3.b");

test("check getMotto results", () => {
  expect(getMotto("Targaryen")).toBe("Fire and Blood");
  expect(getMotto("Stark")).not.toBe("Fire and Blood");
  expect(getMotto("Tully")).toBe("Family, Duty, Honor");
  expect(getMotto("")).toBe(false);
  expect(getMotto()).toBe(false);
});
