var $leftNav = document.querySelector('.left-nav');
var $rightNav = document.querySelector('.right-nav');
var $image = document.querySelector('img');
var $dotList = document.querySelectorAll('#progress-bar > i');
var $progressBar = document.querySelector('#progress-bar');

var imageIntervalID = setInterval(toggleCarouselForward, 3000);
var imageCounter = 0;

function toggleCarouselForward() {
  if (imageCounter < 4) {
    imageCounter++;
  } else if (imageCounter === 4) {
    imageCounter = 0;
  }
  changeImage();
}

function toggleCarouselBackward() {
  if (imageCounter > 0) {
    imageCounter--;
  } else if (imageCounter === 0) {
    imageCounter = 4;
  }
  changeImage();
}

function changeImage() {
  if (imageCounter === 0) {
    $image.src = 'images/001.png';
    $image.alt = 'Bulbasaur';
    toggleShading();

  } else if (imageCounter === 1) {
    $image.src = 'images/004.png';
    $image.alt = 'Charmander';
    toggleShading();

  } else if (imageCounter === 2) {
    $image.src = 'images/007.png';
    $image.alt = 'Squirtle';
    toggleShading();

  } else if (imageCounter === 3) {
    $image.src = 'images/025.png';
    $image.alt = 'Pikachu';
    toggleShading();

  } else if (imageCounter === 4) {
    $image.src = 'images/039.png';
    $image.alt = 'Jigglypuff';
    toggleShading();
  }
}

function toggleShading() {
  for (var i = 0; i < $dotList.length; i++) {
    if (i === imageCounter) {
      $dotList[i].className = 'far fa-circle shaded';
    } else {
      $dotList[i].className = 'far fa-circle';
    }
  }
}

function resetInterval() {
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
}

$leftNav.addEventListener('click', function (event) {
  toggleCarouselBackward();
  resetInterval();
});

$rightNav.addEventListener('click', function (event) {
  toggleCarouselForward();
  resetInterval();
});

$progressBar.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    imageCounter = Number(event.target.dataset.id);
    changeImage();
    resetInterval();
  }
});
