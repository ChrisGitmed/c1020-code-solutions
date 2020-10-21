var contactForm = document.getElementById('contact-form');
var newObject = {};

function handleSubmit(event) {
  event.preventDefault();
  newObject.name = contactForm.elements.name.value;
  newObject.email = contactForm.elements.email.value;
  newObject.message = contactForm.elements.message.value;
  console.log('Message data: ', newObject);
  contactForm.reset();
}

contactForm.addEventListener('submit', handleSubmit);
