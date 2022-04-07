const spy = require('./task_3.8');

test('test myFunction', () => {
    var spied = spy(myFunction);
    spied();
    var report = spied.report();
    // var report = 0;
    expect(report).toBe(1);
});