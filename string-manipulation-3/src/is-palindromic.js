/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var arrayOfWords = string.split(' ');
  var workableString = '';
  var reversedString = '';

  for (var i = 0; i < arrayOfWords.length; i++) {
    workableString += arrayOfWords[i];
  }

  for (i = workableString.length - 1; i >= 0; i--) {
    reversedString += workableString[i];
  }

  if (workableString === reversedString) {
    return true;
  } else return false;
}
