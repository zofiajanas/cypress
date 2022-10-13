import { createSingleCharacter } from './characters';
import { api, storageName, toggleLoader, VISIBLE } from './utils';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

const noResults = document.querySelector('.no-results');

const searchMake = async e => {
  e.preventDefault();
  noResults.classList.remove(VISIBLE);
  toggleLoader(true);

  const searchValue = searchInput.value;
  const URL = `character?name=${searchValue}`;

  try {
    const { data } = await api.get(URL);

    if (data.count == 0) {
      noResults.classList.add(VISIBLE);
    }

    data.data.forEach(character => {
      createSingleCharacter(character);
    });
  } catch (e) {
    console.log(e);
  } finally {
    toggleLoader(false);
  }
};

searchForm.addEventListener('submit', searchMake);
