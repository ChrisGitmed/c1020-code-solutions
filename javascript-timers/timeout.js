var $headerText = document.querySelector('h1');

setTimeout(switchText, 2 * 1000);

function switchText() {
  $headerText.textContent = 'Hello there';
}
