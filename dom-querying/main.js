console.log('Hello world!');

console.log('Value of h1 element: ', document.querySelector('h1'));
console.dir(document.querySelector('h1'));

console.log('Value of element with ID explanation: ', document.querySelector('#explanation'));
console.dir(document.querySelector('#explanation'));

console.log('Value of element with class hint: ', document.querySelector('.hint'));
console.dir(document.querySelector('.hint'));

console.log('Value of all elements of type p: ', document.querySelectorAll('p'));
console.log('Value of all elements with class example-link: ', document.querySelectorAll('.example-link'));
