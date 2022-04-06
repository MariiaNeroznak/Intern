const myFunction = require('./task_3.8');

test('test myFunction', () => {
    var spied = spy(myFunction);
    spied();
    var report = spied.report();
    expect(report).toBe(1);
});