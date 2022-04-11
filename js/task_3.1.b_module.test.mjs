import { getMyself } from "./task_3.1.b_module.mjs";

test("test getMyself function", () => {
  expect(getMyself(5)).toBe(5);
  expect(getMyself("a")).toBe("a");
});
