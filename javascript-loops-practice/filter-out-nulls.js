/* exported filterOutNulls */
function filterOutNulls(values) {
  var allValuesExceptNull = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      allValuesExceptNull.push(values[i]);
    }
  }
  return allValuesExceptNull;
}
