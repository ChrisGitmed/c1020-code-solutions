/* exported todos */

var todos = [];
var previousTodosJson = localStorage.getItem('javascript-local-storage');

if (previousTodosJson !== null) {
  todos = JSON.parse(previousTodosJson);
}

function setItemsInStorage(event) {
  var todosJson = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJson);
}
window.addEventListener('beforeunload', setItemsInStorage);
