/* eslint-disable no-unused-vars */
function union(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }

  for (i = 0; i < second.length; i++) {
    var isFound = false;
    for (var x = 0; x < newArray.length; x++) {
      if (second[i] === newArray[x]) {
        isFound = true;
      }
    }
    if (!isFound) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
