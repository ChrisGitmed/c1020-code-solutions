var num1 = 1;
var num2 = 2;
var num3 = 3;
var maximumValue = Math.max(num1, num2, num3);

console.log('Value of maximumValue: ', maximumValue);

var heroes = ['Iron Man', 'Thor', 'Dr. Strange', 'The Hulk'];
var randomNumber = Math.random(10);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Value of randomHero: ', randomHero);

var library = [
  {
    title: 'The Noma Guide to Fermentation',
    author: 'David Zilber'
  },
  {
    title: 'Brief Answers to the Big Questions',
    author: 'Stephen Hawking'
  },
  {
    title: 'Astrophysics for People in a Hurry',
    author: 'Niel Degrasse Tyson'
  }
];

var lastBook = library.pop();

console.log('Value of lastBook: ', lastBook);

var firstBook = library.shift(0);

console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Value of library: ', library);

var fullName = 'Christopher Gitmed';
var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName: ', sayMyName);
