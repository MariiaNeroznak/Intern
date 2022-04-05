const sevenAte9 = require("./task_3.7");

test.skip("check sevenAte9", () => {
    expect(sevenAte9('79712312')).toBe('7712312');
    expect(sevenAte9('79797')).toBe('777')
});