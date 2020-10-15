/* exported findIndex */
function findIndex(array, value) {
  var foundIndex = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}
