// const spy = require("./task_3.8");
// const myFunction = require("./task_3.8");
import {spy, myFunction} from "./task_3.8";

test("test myFunction", () => {
  const spied = spy(myFunction);
  spied();
  let report = spied.report();

  expect(report).toEqual({ totalCalls: 1 });
  spied();
  spied();
  report = spied.report();
  expect(report).toEqual({ totalCalls: 3 });
});
