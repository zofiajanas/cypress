import { displayAllFavorites } from './favorites';
import { showMessage, storageName } from './utils';

const addToFavorites = (id) => {
  const charactersId = localStorage.getItem(storageName)
    ? `${localStorage.getItem(storageName)},`
    : '';

  // if (charactersId.includes(id)) return showMessage('This character is already in the favorites!');

  localStorage.setItem(storageName, charactersId + id);

  showMessage('Great!');
};

const removeFromFavorites = (id) => {
  const charactersId = localStorage.getItem(storageName);
  const charactersArray = charactersId.split(',');
  const newCharacters = charactersArray.filter((el) => +el !== +id).join(',');
  localStorage.setItem(storageName, newCharacters);

  showMessage('So sad');

  // 1.
  // document.querySelector(".character-list").innerHTML = "";
  // displayAllFavorites();

  // 2.
  // const liElement = document.querySelector(`.character-list li[data-id="${id}"]`);
  // liElement.remove();
};

export const createSingleCharacter = async (data, isFav) => {
  const characterList = document.querySelector('.character-list');

  const template = document.querySelector('.character-item');
  const clon = template.content.cloneNode(true);

  clon.querySelector('li').setAttribute('data-id', data._id);
  clon.querySelector('.character-item__photo').src = data.imageUrl;
  clon.querySelector('.character-item__name').textContent = data.name;

  if (isFav)
    clon
      .querySelector('button')
      .addEventListener('click', () => removeFromFavorites(data._id));
  else
    clon
      .querySelector('button')
      .addEventListener('click', () => addToFavorites(data._id));

  characterList.appendChild(clon);
};
