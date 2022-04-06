const getX = require("./task_3.6");

test("check getX", () => {
    expect(getX(10)(2)).toBe(12);
    expect(getX(5)(4)).toBe(9);
    expect(getX(3).toString()).toBe("y => x + y");
});