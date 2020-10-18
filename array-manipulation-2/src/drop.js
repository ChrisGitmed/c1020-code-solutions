/* eslint-disable no-unused-vars */
function drop(array, count) {
  var newArray = [];

  if (array.length > 0) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
