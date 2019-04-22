import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import deviceReducer from "./deviceReducer";
import transferOwnershipReducer from "./transferOwnership";
import historyReducer from "./history";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  deviceReducer: deviceReducer,
  transferOwnershipReducer: transferOwnershipReducer,
  history: historyReducer
});
