import { FETCH_CHARACTERS, ADD_CHARACTER } from './types';
import axios from 'axios';

export const fetchCharacters = () => dispatch => {

  axios
  .post('/api/characters/query', {
    owner: 'abc@gmail.com'
  })
  .then(function(characters) {
      dispatch({
        type: FETCH_CHARACTERS,
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
        type: ADD_CHARACTER,
        payload: charData
      })
    }
  )
};
