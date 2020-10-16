/* eslint-disable no-unused-vars */
function capitalize(word) {
  var newWord = word[0].toUpperCase();

  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  return newWord;
}
