const currentRoute = window.location.pathname;

const menuItems = [...document.querySelectorAll('header nav ul li a')];

menuItems.forEach(item => {
  if (item.getAttribute('href') === currentRoute) {
    item.classList.add('active');
  }
});

// show login modal
const loginModalButton = document.querySelector('.login-modal-button');
const modalLogin = document.querySelector('.login-form');

loginModalButton.addEventListener('click', () => {
  modalLogin.classList.toggle('visible');
});
