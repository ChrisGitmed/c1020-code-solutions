function ExampleConstructor() {
}

console.log('exampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof exampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var newObject = new ExampleConstructor();

console.log('Value of newObject: ', newObject);

var result = newObject instanceof ExampleConstructor;

console.log('Value of result: ', result);
