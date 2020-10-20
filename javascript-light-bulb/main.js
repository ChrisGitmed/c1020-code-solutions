var dot = document.querySelector('div');
var background = document.querySelector('body');

function toggleBackground(event) {
  if (dot.className === 'background-yellow' && background.className === 'background-white') {
    background.className = 'background-black';
    dot.className = 'background-gray';
  } else if (dot.className === 'background-gray' && background.className === 'background-black') {
    background.className = 'background-white';
    dot.className = 'background-yellow';
  }
}

dot.addEventListener('click', toggleBackground);
