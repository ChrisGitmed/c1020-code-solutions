var $h1 = document.querySelector('h1');

var countdownInterval = setInterval(countdown, 1000);

function countdown() {
  $h1.textContent--;

  if ($h1.textContent === '0') {
    $h1.textContent = '~~Earth Beeelooowwww Us~~';
    clearInterval(countdownInterval);
  }
}
