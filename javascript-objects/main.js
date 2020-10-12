/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Chris',
  lastName: 'Gitmed',
  age: 26
};

var vehicle = {
  make: 'Subaru',
  model: 'Forester',
  year: '2004'
};

var pet = {
  name: 'Jurj Clooners',
  type: 'Cat'
};

var fullName = student.firstName + ' ' + student.lastName;

console.log(fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Studio Assistant';

console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log(student);

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;

console.log('color: ', vehicle['color']);
console.log('isConvertible: ', vehicle['isConvertible']);
console.log(vehicle);

delete pet.name;
delete pet.type;
console.log(pet);
