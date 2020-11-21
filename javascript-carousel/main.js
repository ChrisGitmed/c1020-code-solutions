var $leftNav = document.querySelector('.left-nav');
var $rightNav = document.querySelector('.right-nav');
var $image = document.querySelector('img');
var $dotList = document.querySelectorAll('#progress-bar > i');
var $progressBar = document.querySelector('#progress-bar');

var data = {
  imageCounter: 0,
  images: [
    {
      src: 'images/001.png',
      alt: 'Bulbasaur'
    },
    {
      src: 'images/004.png',
      alt: 'Charmander'
    },
    {
      src: 'images/007.png',
      alt: 'Squirtle'
    },
    {
      src: 'images/025.png',
      alt: 'Pikachu'
    },
    {
      src: 'images/039.png',
      alt: 'jigglypuff'
    }
  ]
};

var imageIntervalID = setInterval(toggleCarouselForward, 3000);

function toggleCarouselForward() {
  if (data.imageCounter < data.images.length - 1) {
    data.imageCounter++;
  } else if (data.imageCounter === data.images.length - 1) {
    data.imageCounter = 0;
  }
  changeImage();
}

function toggleCarouselBackward() {
  if (data.imageCounter > 0) {
    data.imageCounter--;
  } else if (data.imageCounter === 0) {
    data.imageCounter = data.images.length - 1;
  }
  changeImage();
}

function changeImage() {
  for (var i = 0; i < data.images.length; i++) {
    if (data.imageCounter === i) {
      $image.src = data.images[i].src;
      $image.alt = data.images[i].alt;
      $dotList[i].className = 'far fa-circle shaded';
    } else {
      $dotList[i].className = 'far fa-circle';
    }
  }
  resetInterval();
}

function resetInterval() {
  clearInterval(imageIntervalID);
  imageIntervalID = setInterval(toggleCarouselForward, 3000);
}

$leftNav.addEventListener('click', function (event) {
  toggleCarouselBackward();
});

$rightNav.addEventListener('click', function (event) {
  toggleCarouselForward();
});

$progressBar.addEventListener('click', function (event) {
  if (event.target.tagName === 'I') {
    data.imageCounter = Number(event.target.dataset.id);
    changeImage();
  }
});
