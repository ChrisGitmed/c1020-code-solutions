/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  var newArray = [];

  if (array.length > 0) {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
