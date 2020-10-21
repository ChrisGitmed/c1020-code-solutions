/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var newObject = {};

  for (var key in source) {
    var isFound = false;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        isFound = true;
      }
    }
    if (isFound === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
