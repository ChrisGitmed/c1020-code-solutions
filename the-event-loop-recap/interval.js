/* eslint-disable no-console */
let count = 3;

var intervalID = setInterval(function () {
  if (count === 0) {
    clearInterval(intervalID);
    console.log('Blast off!!');
  }
  if (count !== 0) {
    console.log(count);
  }
  count--;
}, 1000);
