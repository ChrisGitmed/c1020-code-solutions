/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];

  for (var i = 0; i < words.length; i++) {
    suffixArray.push(words[i] + suffix);
  }
  return suffixArray;
}
