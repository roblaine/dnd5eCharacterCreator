import { FETCH_CHARACTERS, ADD_CHARACTER } from "./types";
import axios from "axios";

export const fetchCharacters = userData => dispatch => {
  console.log(userData);
  axios
  .post("/api/characters/query", userData)
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
  .post("/api/characters/add", charData)
  .then(function(charData) {
      dispatch({
        type: ADD_CHARACTER,
        payload: charData
      })
    }
  )
};
