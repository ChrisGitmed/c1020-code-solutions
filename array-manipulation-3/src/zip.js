/* eslint-disable no-unused-vars */
function zip(first, second) {
  var arrayOfArrays = [];

  for (var i = 0; i < first.length && i < second.length; i++) {
    var arrayChunk = [];
    arrayChunk.push(first[i]);
    arrayChunk.push(second[i]);
    arrayOfArrays.push(arrayChunk);
  }
  return arrayOfArrays;
}
