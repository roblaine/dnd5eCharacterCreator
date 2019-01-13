import axios from "axios";
import {
  FETCH_CHARACTERS,
  ADD_CHARACTER,
  GET_ERRORS,
} from "./types";

export const fetchCharacters = userData => dispatch => {
  axios
  .post("/api/characters/query", userData)
  .then(function(characters) {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters.data
      })
    }
  )
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
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
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};
