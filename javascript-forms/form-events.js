function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

var inputList = document.querySelectorAll('input');
var formControl1 = inputList[0];
var formControl2 = inputList[1];
var formControlTextArea = document.querySelector('textarea');

formControl1.addEventListener('focus', handleFocus);
formControl1.addEventListener('blur', handleBlur);
formControl1.addEventListener('input', handleInput);

formControl2.addEventListener('focus', handleFocus);
formControl2.addEventListener('blur', handleBlur);
formControl2.addEventListener('input', handleInput);

formControlTextArea.addEventListener('focus', handleFocus);
formControlTextArea.addEventListener('blur', handleBlur);
formControlTextArea.addEventListener('input', handleInput);
