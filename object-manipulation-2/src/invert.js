/* eslint-disable no-unused-vars */
function invert(source) {
  var newObject = {};

  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
