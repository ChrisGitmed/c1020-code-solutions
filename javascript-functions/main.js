function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('Value of convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name + '!';
}
var greetResult = greet('Chris');
console.log('Value of greetResult: ', greetResult);

function getArea(width, height) {
  return width * height;
}
var getAreaResult = getArea(5, 5);
console.log('Value of getAreaResult: ', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Chris', lastName: 'Gitmed' });
console.log('Value of getFirstNameResult: ', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Value of getLastElementResult: ', getLastElementResult);
