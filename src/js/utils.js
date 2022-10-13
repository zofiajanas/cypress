import axios from 'axios';
import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';

export const api = axios.create({
  baseURL: 'https://api.disneyapi.dev',
});

export const VISIBLE = 'visible';

export const storageName = 'favouritesDisneyCharacters';

export const toggleLoader = isVisible => {
  const loader = document.querySelector('.loader');

  if (isVisible) loader.classList.add(VISIBLE);
  if (!isVisible) loader.classList.remove(VISIBLE);
};

export const showMessage = txt => {
  Toastify({
    text: txt,
    duration: 3000,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
  }).showToast();
};
