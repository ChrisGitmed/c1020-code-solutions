/* eslint-disable no-console */
const add = require('./add');
const multiply = require('./multiply');
const subtract = require('./subtract');
const divide = require('./divide');

const firstNum = process.argv[2];
const secondNum = process.argv[4];
const operator = process.argv[3];

if (operator === 'plus') {
  console.log(`Result: ${add(Number(firstNum), Number(secondNum))}`);
} else if (operator === 'minus') {
  console.log(`Result: ${subtract(firstNum, secondNum)}`);
} else if (operator === 'times') {
  console.log(`Result: ${multiply(firstNum, secondNum)}`);
} else if (operator === 'over') {
  console.log(`Result: ${divide(firstNum, secondNum)}`);
}
