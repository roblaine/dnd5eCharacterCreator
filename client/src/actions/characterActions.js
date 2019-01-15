import axios from "axios";
import Log from "../utils/log";
import {
  FETCH_CHARACTERS,
  ADD_CHARACTER,
  DELETE_CHARACTER,
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

export const addCharacter = character => dispatch => {
  Log.trace("Adding character for the user");
  Log.trace(character);
  axios
  .post("/api/characters/add", character)
  .then(character => {
      dispatch({
        type: ADD_CHARACTER,
        payload: character
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

export const deleteCharacter = charData => dispatch => {
  Log.trace("Deleting the character for the user");
  Log.trace(charData);
  // Get the important info from charData that the endpoint expects
  const deleteData = { characterId: charData._id };

  axios
  .post("/api/characters/delete", deleteData)
  .then(function(deleteData) {
    console.log("delete char: ", deleteData.data);
    dispatch({
      type: DELETE_CHARACTER,
      payload: deleteData.data
    })
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};
