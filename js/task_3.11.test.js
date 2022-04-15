// const say = require("./task_3.11");
import {say} from "./task_3.11";

test("Check say function", () => {
  expect(say("Hello, ")("it's me")).toBe("Hello, it's me");
  // expect(say("Here ")("I am. ")("And more things")).not.toBe("Here I am. And more things");
});
