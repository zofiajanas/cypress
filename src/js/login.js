import { toggleLoader, VISIBLE } from './utils';

const searchForm = document.querySelector('.login-form');

const loginInput = document.querySelector('.login-input');
const passwordInput = document.querySelector('.password-input');

const loginError = document.querySelector('.login-error');
const passwordError = document.querySelector('.password-error');
const formError = document.querySelector('.form-error');

const validation = () => {
  let isValid = true;

  loginError.classList.remove(VISIBLE);
  passwordError.classList.remove(VISIBLE);

  if (loginInput.value.length < 1) {
    loginError.classList.add(VISIBLE);
    isValid = false;
  }

  if (passwordInput.value.length < 1) {
    passwordError.classList.add(VISIBLE);
    isValid = false;
  }

  return isValid;
};

const backendLogin = (login, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login !== dummyUser.login) {
        reject(`We don't have this login`);
      }
      if (password !== dummyUser.password) {
        reject(`Password is incorrect`);
      }

      resolve('success');
    }, 2000);
  });
};

const dummyUser = {
  login: 'login',
  password: 'pass',
};

const submitForm = async (e) => {
  e.preventDefault();

  const isValid = validation();
  if (!isValid) return;

  try {
    toggleLoader(true);
    const login = loginInput.value;
    const password = passwordInput.value;
    await backendLogin(login, password);

    // redirect
    window.location.href = '/pages/favorites.html';
  } catch (e) {
    console.log(e);
    formError.textContent = e;
    formError.classList.add(VISIBLE);
  } finally {
    toggleLoader(false);
  }
};

searchForm.addEventListener('submit', submitForm);
