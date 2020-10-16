/* exported sumAll */
function sumAll(numbers) {
  var sumOfAll = 0;

  for (var i = 0; i < numbers.length; i++) {
    sumOfAll += numbers[i];
  }
  return sumOfAll;
}
