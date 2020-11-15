/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var answer = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (answer === 'Javascript') {
    return 'JavaScript';
  }
  return answer;
}
