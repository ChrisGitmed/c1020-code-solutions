var doc = document.querySelector('html');
var string = document.querySelectorAll('span');
var counter = 0;

function checkKeyPressed(event) {

  if (event.key === string[counter].textContent) {
    string[counter].className = 'green';
    counter++;
    string[counter].className = 'underlined';
  } else {
    string[counter].className = 'red underlined';
  }
}
doc.addEventListener('keydown', checkKeyPressed);
