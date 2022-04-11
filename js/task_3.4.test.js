const removeDublicates = require("./task_3.4");

test("check dublicates", () => {
  expect(removeDublicates([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates([1, 3, "s", "a", 5, "a", 5])).toEqual([1, 3, "s", "a", 5]);
  expect(removeDublicates([])).toEqual([]);
  expect(removeDublicates()).toBeUndefined();
});
