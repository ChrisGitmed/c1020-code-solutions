/* eslint-disable no-unused-vars */
function equal(first, second) {
  var isNotEqual = false;

  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        isNotEqual = true;
      }
    }
    if (!isNotEqual) {
      return true;
    } else {
      return false;
    }
  } else { return false; }
}
