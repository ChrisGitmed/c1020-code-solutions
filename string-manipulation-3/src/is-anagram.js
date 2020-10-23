/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {

  firstString = firstString.split(' ');
  var firstCompareString = '';
  for (var i = 0; i < firstString.length; i++) {
    firstCompareString += firstString[i];
  }
  secondString = secondString.split(' ');
  var secondCompareString = '';
  for (i = 0; i < secondString.length; i++) {
    secondCompareString += secondString[i];
  }

  if (firstCompareString.length === secondCompareString.length) {

    for (i = 0; i < firstCompareString.length; i++) {
      var isFound = false;
      for (var x = 0; x < secondCompareString.length; x++) {
        if (firstCompareString[i] === secondCompareString[x]) {
          isFound = true;
        }
      }
      if (!isFound) { return false; }
    }

    for (i = 0; i < secondCompareString.length; i++) {
      var isFound2 = false;
      for (x = 0; x < firstCompareString.length; x++) {
        if (secondCompareString[i] === firstCompareString[x]) {
          isFound2 = true;
        }
      }
      if (!isFound2) { return false; }
    }

    if (isFound && isFound2) { return true; }
  } else return false;
}
