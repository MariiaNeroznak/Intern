// const sevenAte9 = require("./task_3.7");
import {sevenAte9} from "./task_3.7";

test("check sevenAte9", () => {
  expect(sevenAte9("79712312")).toBe("7712312");
  expect(sevenAte9("79797")).toBe("777");
  expect(sevenAte9("7912312")).toBe("7912312");
});
