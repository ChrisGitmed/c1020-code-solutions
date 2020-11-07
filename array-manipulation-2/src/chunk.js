/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var arrayOfArrays = [];

  for (var i = 0; i < array.length; i += size) {
    arrayOfArrays.push(array.slice(i, i + size));
  }

  return arrayOfArrays;
}
