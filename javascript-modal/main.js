var button1 = document.querySelector('button.blue-background');
var button2 = document.querySelector('button.red-background');
var hiddenContainer = document.querySelector('.hidden-container');
var isHidden = true;

function toggleHidden(event) {
  if (isHidden) {
    hiddenContainer.className = 'hidden-container';
    isHidden = false;
  } else if (!isHidden) {
    hiddenContainer.className = 'hidden-container invisible';
    isHidden = true;
  }
}
button1.addEventListener('click', toggleHidden);
button2.addEventListener('click', toggleHidden);
