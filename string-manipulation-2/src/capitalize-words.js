/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var wordsArray = string.split(' ');
  var result = '';

  for (var i = 0; i < wordsArray.length; i++) {
    var word = wordsArray[i];
    if (i === wordsArray.length - 1) {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
    }
  }
  return result;
}
