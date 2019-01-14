import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import characterReducer from "./characterReducer";
import campaignReducer from "./campaignReducer";

export default combineReducers({
  auth: authReducer,
  characters: characterReducer,
  campaigns: campaignReducer,
  errors: errorReducer
});
