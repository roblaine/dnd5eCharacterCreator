import {
  FETCH_USER,
  FETCH_CHARACTERS,
  ADD_CHARACTER,
  DELETE_CHARACTER
} from "../actions/types";

import Log from "../utils/log";

const initialState = {
  characters: [],
  newCharacter: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      Log.trace("Setting state to contain characters")
      Log.trace(action.payload)
      return {
        ...state,
        characters: action.payload
      };
    case ADD_CHARACTER:
      Log.trace("Adding character");
      Log.trace(action.payload.data.name);
      state = {
        ...state,
        // Add the new character to the characters array
        newCharacter: action.payload.data
      };
      Log.trace("New state");
      Log.trace(state);
      return state;
    case DELETE_CHARACTER:
      // Return the new state skipping the object to delete by finding first the index
      var index = state.characters.map(function(e) {
        return e._id;
      }).indexOf(action.payload.character._id);

      return {
        ...state,
        characters: [
          ...state.characters.slice(0, index),
          ...state.characters.slice(index + 1)
        ]
      }
    default:
      return state;
  }
}
