import { FETCH_CHARACTERS, ADD_CHARACTER } from './types';
import axios from 'axios';

export const fetchCharacters = (userData) => dispatch => {
  console.log(userData);
  axios
  .post('/api/characters/query', {
    owner: 'abc@gmail.com'
  })
  .then(function(characters) {
      dispatch({
        FETCH_CHARACTERS,
        payload: characters.data
      })
    }
  )
};

export const addCharacter = charData => dispatch => {
  axios
  .post('/api/characters/add', {
    owner: 'abc@gmail.com'
  })
  // Only store the data in data
  .then(function(charData) {
      dispatch({
        ADD_CHARACTER,
        payload: charData
      })
    }
  )
};
