/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var wordsArray = string.split(' ');
  var reversedString = '';

  // Loop through array
  for (var i = 0; i < wordsArray.length; i++) {
    var reversedWord = '';

    for (var x = wordsArray[i].length - 1; x >= 0; x--) {
      if (wordsArray[i] !== undefined) {
        reversedWord += wordsArray[i][x];
      }
    }
    if (i === wordsArray.length - 1) {
      reversedString += reversedWord;
    } else { reversedString += reversedWord + ' '; }
  }
  return reversedString;
}
