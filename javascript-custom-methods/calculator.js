/* exported calculator */
var calculator = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },

  multiply(x, y) {
    return x * y;
  },

  divide(x, y) {
    return x / y;
  },

  square(x) {
    return x * x;
  },

  sumAll(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },

  getAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
};
