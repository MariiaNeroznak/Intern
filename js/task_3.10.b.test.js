// const Calculator = require("./task_3.10.b");
import {Calculator} from "./task_3.10.b";

test("check calculator b", () => {
  var calc = new Calculator(0);
  const amount = calc.add(5).multiply(2).add(20).divide(3).getResult();
  expect(amount).toBe(10);
});
