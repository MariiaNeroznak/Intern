const Calculator = require('./task_3.10.b');

test.skip('check calculator b', () => {
  var calc = new Calculator(0);
  const amount = calc.add(5).multiply(2).add(20).divide(3);
  expect(amount).toBe(10);
});
