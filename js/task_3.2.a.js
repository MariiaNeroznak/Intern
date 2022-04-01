function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (isNaN(Number(arguments[i]))) return;
    sum += +arguments[i];
  }
  return sum;
}

module.exports = sum;
