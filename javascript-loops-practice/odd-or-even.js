/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenArray = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArray.push('even');
    } else {
      oddOrEvenArray.push('odd');
    }
  }
  return oddOrEvenArray;
}
