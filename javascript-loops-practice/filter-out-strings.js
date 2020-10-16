/* exported filterOutStrings */
function filterOutStrings(values) {
  var allExceptStrings = [];

  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof 'string') {
      allExceptStrings.push(values[i]);
    }
  }
  return allExceptStrings;
}
