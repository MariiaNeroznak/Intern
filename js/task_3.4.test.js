const removeDublicates = require("./task_3.4");

test.skip("check dublicates", function () {
  expect(removeDublicates([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates([])).toEqual([]);
  expect(removeDublicates()).toBeUndefined();
});
