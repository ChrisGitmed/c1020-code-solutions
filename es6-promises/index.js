/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const myFirstPromise = takeAChance('Chris');

myFirstPromise.then(onSuccess => {
  console.log(onSuccess);
}, onFail => {
  console.error(onFail.message);
});
