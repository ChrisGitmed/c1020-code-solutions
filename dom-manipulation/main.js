var clickCounter = 0;
var button = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

button.addEventListener('click', function () {
  clickCounter++;
  clickCount.textContent = 'Clicks: ' + clickCounter;

  if (clickCounter < 4) {
    button.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    button.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    button.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    button.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    button.className = 'hot-button hot';
  } else {
    button.className = 'hot-button nuclear';
  }
});
