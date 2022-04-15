// const removeDublicates = require("./task_3.4");
import { removeDublicates, removeDublicates1, removeDublicates2, removeDublicates3, removeDublicates4 } from './task_3.4';


test("check dublicates", () => {
  expect(removeDublicates([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates([1, 3, "s", "a", 5, "a", 5])).toEqual([1, 3, "s", "a", 5]);
  expect(removeDublicates([])).toEqual([]);
  expect(removeDublicates()).toBeUndefined();

  expect(removeDublicates1([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates1([1, 3, "s", "a", 5, "a", 5])).toEqual([1, 3, "s", "a", 5]);
  expect(removeDublicates1([])).toEqual([]);
  expect(removeDublicates1()).toBeUndefined();

  expect(removeDublicates2([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates2([1, 3, "s", "a", 5, "a", 5])).toEqual([1, 3, "s", "a", 5]);
  expect(removeDublicates2([])).toEqual([]);
  expect(removeDublicates2()).toBeUndefined();

  expect(removeDublicates3([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates3([1, 3, "s", "a", 5, "a", 5])).toEqual([1, 3, "s", "a", 5]);
  expect(removeDublicates3([])).toEqual([]);
  expect(removeDublicates3()).toBeUndefined();

  expect(removeDublicates4([1, 2, 4, 4, 4, 6, 2])).toEqual([1, 2, 4, 6]);
  expect(removeDublicates4([1, 3, "s", "a", 5, "a", 5])).toEqual([1, 3, "s", "a", 5]);
  expect(removeDublicates4([])).toEqual([]);
  expect(removeDublicates4()).toBeUndefined();
});
