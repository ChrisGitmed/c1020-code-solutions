/* eslint-disable no-unused-vars */
function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    var isFound = false;
    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        isFound = true;
      }
    }
    if (!isFound) {
      newArray.push(first[i]);
    }
  }

  for (var c = 0; c < second.length; c++) {
    var isFound2 = false;
    for (var a = 0; a < first.length; a++) {
      if (second[c] === first[a]) {
        isFound2 = true;
      }
    }
    if (!isFound2) {
      newArray.push(second[c]);
    }
  }
  return newArray;
}
