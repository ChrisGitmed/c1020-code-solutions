var dot = document.querySelector('div');
var background = document.querySelector('body');
var isOn = true;

function toggleBackground(event) {
  if (isOn) {
    background.className = 'background-black';
    dot.className = 'background-gray';
    isOn = false;
  } else if (!isOn) {
    background.className = 'background-white';
    dot.className = 'background-yellow';
    isOn = true;
  }
}

dot.addEventListener('click', toggleBackground);
