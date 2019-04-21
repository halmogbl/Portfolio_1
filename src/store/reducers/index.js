import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import deviceReducer from "./deviceReducer";
import transferOwnershipReducer from "./transferOwnership";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  deviceReducer: deviceReducer,
  transferOwnershipReducer: transferOwnershipReducer
});
