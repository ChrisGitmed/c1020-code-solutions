/* eslint-disable no-unused-vars */
function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {

    var isFound = false;
    for (var x = 0; x < newArray.length; x++) {
      if (array[i] === newArray[x]) {
        isFound = true;
      }
    }
    if (!isFound) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
