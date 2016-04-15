var navButton = document.querySelector('.main-menu-icon');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

var closeButton = document.querySelector('.close-icon');

closeButton.addEventListener('click', function() {
  console.log('closed!!!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});