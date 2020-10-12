/* eslint-disable no-console */
var width = 1;
var height = 2;
var area = width * height;

console.log('Value of area: ', area);
console.log('Type of area: ', typeof area);

var bill = 100;
var payment = 150;
var change = payment - bill;

console.log('Value of change: ', change);
console.log('Type of change: ', typeof change);

var quizzes = 100;
var midterm = 90;
var final = 95;
var grade = (quizzes + midterm + final) / 3;

console.log('Value of grade: ', grade);
console.log('Type of grade ', typeof grade);

var firstName = 'Chris';
var lastName = 'Gitmed';
var fullName = firstName + ' ' + lastName;

console.log('Value of fullName: ', fullName);
console.log('Type of fullName ', typeof fullName);

var pH = 8;
var isAcidic;

if (pH < 7) {
  isAcidic = true;
} else {
  isAcidic = false;
}
console.log('Value of isAcidic: ', isAcidic);
console.log('Type of isAcidic: ', typeof isAcidic);

var headCount = 250;
var isSparta;

if (headCount === 300) {
  isSparta = true;
} else {
  isSparta = false;
}
console.log('Value of isSparta: ', isSparta);
console.log('Type of isSparta: ', typeof isSparta);

var motto = fullName;

motto = motto + ' is the GOAT';
console.log('Value of motto: ', motto);
console.log('Type of motto: ', typeof motto);
