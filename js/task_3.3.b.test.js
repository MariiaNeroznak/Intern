const getMotto = require("./task_3.3.b");

test("check getMotto results", function () {
  expect(getMotto("Targaryen")).toBe("Fire and Blood");
  expect(getMotto("Stark")).not.toBe("Fire and Blood");
  expect(getMotto("Tully")).toBe("Family, Duty, Honor");
  expect(getMotto("")).toBeUndefined();
  expect(getMotto()).toBeUndefined();
});
