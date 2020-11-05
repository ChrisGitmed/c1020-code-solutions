var $leftNav = document.querySelector('.left-nav');
var $rightNav = document.querySelector('.right-nav');
var $image = document.querySelector('img');
var $dotList = document.querySelectorAll('#progress-bar > i');

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
    changeImage();
  }
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

$leftNav.addEventListener('click', function (event) {
  toggleCarouselBackward();
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});

$rightNav.addEventListener('click', function (event) {
  if (imageCounter < 4) {
    toggleCarouselForward();
  }
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});

$dotList[0].addEventListener('click', function (event) {
  $image.src = 'images/001.png';
  $image.alt = 'Bulbasaur';
  imageCounter = 0;
  toggleShading();
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});

$dotList[1].addEventListener('click', function (event) {
  $image.src = 'images/004.png';
  $image.alt = 'Charmander';
  imageCounter = 1;
  toggleShading();
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});

$dotList[2].addEventListener('click', function (event) {
  $image.src = 'images/007.png';
  $image.alt = 'Squirtle';
  imageCounter = 2;
  toggleShading();
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});

$dotList[3].addEventListener('click', function (event) {
  $image.src = 'images/025.png';
  $image.alt = 'Pikachu';
  imageCounter = 3;
  toggleShading();
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});

$dotList[4].addEventListener('click', function (event) {
  $image.src = 'images/039.png';
  $image.alt = 'Jigglypuff';
  imageCounter = 4;
  toggleShading();
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
});
