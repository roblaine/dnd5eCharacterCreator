import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import characterReducer from "./characterReducer";

export default combineReducers({
  auth: authReducer,
  characters: characterReducer,
  errors: errorReducer
});
