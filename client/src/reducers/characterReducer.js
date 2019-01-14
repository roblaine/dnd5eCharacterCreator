import {
  FETCH_CHARACTERS,
  ADD_CHARACTER,
  CHOOSE_CHARACTER,
  DELETE_CHARACTER
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_CHARACTER:
      return {
        ...state,
        item: action.payload
      };
    case CHOOSE_CHARACTER:
      return {
        ...state,
        item: action.payload
      }
    case DELETE_CHARACTER:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
