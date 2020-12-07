/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal);
console.log('sum: ', sum);

const product = numbers.reduce((accumulator, currentVal) => accumulator * currentVal);
console.log('product: ', product);

const balance = account.reduce((accumulator, currentVal) => {
  if (currentVal.type === 'deposit') {
    return accumulator + currentVal.amount;
  } else if (currentVal.type === 'withdrawal') {
    return accumulator - currentVal.amount;
  }
}, 0);
console.log('balance: ', balance);

const composite = traits.reduce((accumulator, currentVal) =>
  Object.assign(accumulator, currentVal)
);
console.log('composite: ', composite);
