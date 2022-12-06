import { createSingleCharacter } from './characters';
import { api, storageName } from './utils';

const getCharacter = async (id) => {
  const { data } = await api.get(`characters/${id}`);
  createSingleCharacter(data, true);
};

export const displayAllFavorites = () => {
  const charactersIds = localStorage.getItem(storageName);

  if (charactersIds !== '' && charactersIds !== null) {
    const charactersArray = charactersIds.split(',');
    charactersArray.forEach((characterId) => {
      getCharacter(characterId);
    });
  }
};

if (window.location.pathname === '/pages/favorites.html') displayAllFavorites();

// 6610,5379,4703,5371,1947,1944,4704,2755,3082
