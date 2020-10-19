/* eslint-disable no-unused-vars */
function numVowels(string) {
  var vowelCount = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'A' || string[i].toUpperCase() === 'E' ||
      string[i].toUpperCase() === 'I' || string[i].toUpperCase() === 'O' ||
      string[i].toUpperCase() === 'U') {
      vowelCount++;
    }
  }
  return vowelCount;
}
