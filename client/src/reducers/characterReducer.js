import {
  FETCH_CHARACTERS,
  ADD_CHARACTER,
  CHOOSE_CHARACTER,
  DELETE_CHARACTER
} from "../actions/types";

const initialState = {
  characters: [],
  newCharacter: {},
  chosenCharacter: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    case ADD_CHARACTER:
      return {
        ...state,
        newCharacter: action.payload
      };
    case CHOOSE_CHARACTER:
      return {
        ...state,
        chosenCharacter: action.payload
      }
    case DELETE_CHARACTER:
      // Return the new state skipping the object to delete by finding first the index
      const index = state.characters.map(function(e) { return e._id; }).indexOf(action.payload._id);
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
