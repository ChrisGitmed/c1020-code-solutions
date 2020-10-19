function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var button = document.querySelector('.click-button');
button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var button2 = document.querySelector('.hover-button');
button2.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var button3 = document.querySelector('.double-click-button');
button3.addEventListener('dblclick', handleDoubleClick);
