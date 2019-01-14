import axios from "axios";
import {
  FETCH_CHARACTERS,
  ADD_CHARACTER,
  JOIN_CAMPAIGN,
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
  // Get the important info from charData that the endpoint expects
  const deleteData = { characterId: charData._id };

  axios
  .post("/api/characters/delete", deleteData)
  .then(function(deleteData) {
    console.log("delete char: ", deleteData.data.character);
    dispatch({
      type: DELETE_CHARACTER,
      payload: deleteData.data.character
    })
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  );
};

export const leaveCampaign = playData => dispatch => {
  
};

export const joinCampaign = playData => dispatch => {
  // change the state to reflect the selected character to be used by
  // campaignAction
  console.log("Play Data: ", playData);
  axios
  .post("/api/campaigns/join", playData)
  .then(function(playData) {
    dispatch({
      type: JOIN_CAMPAIGN,
      payload: playData
    })
  })
  .catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
};
