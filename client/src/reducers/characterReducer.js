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
      return {
        ...state,
        characters: [
          ...state.characters.characters.slice(0, action.payload),
          ...state.characters.characters.slice(action.payload + 1)
        ]
      }
    default:
      return state;
  }
}
