/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var char1 = string[firstIndex];
  var char2 = string[secondIndex];
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += char2;
    } else if (i === secondIndex) {
      result += char1;
    } else {
      result += string[i];
    }
  }
  return result;
}
