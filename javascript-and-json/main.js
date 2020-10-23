var books = [
  {
    isbn: '12345',
    title: 'Pigs in Space',
    author: 'George Washington'
  },
  {
    isbn: '56789',
    title: 'This Title Does Not Matter',
    author: 'Ben Franklin'
  },
  {
    isbn: '09876',
    title: 'Rocket League for Dummies',
    author: 'Thomas Jefferson'
  }
];
console.log('books value: ', books);
console.log('Typeof books: ', typeof books);

var booksString = JSON.stringify(books);

console.log('booksString value: ', booksString);
console.log('typeof booksString: ', typeof booksString);

var student = '{"id":"1234","name":"Chris"}';

console.log('student value: ', student);
console.log('typeof student: ', typeof student);

student = JSON.parse(student);

console.log('student value: ', student);
console.log('typeof student: ', typeof student);
