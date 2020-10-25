/* eslint-disable no-unused-vars */
function intersection(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {

    for (var x = 0; x < second.length; x++) {
      if (first[i] === second[x]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
