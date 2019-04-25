import { SET_ERRORS } from "../actions/actionTypes";
import { request } from "http";

const initialState = {
  errors: []
};

const reducer = (state = initialState, action) => {
  console.log("Reducer error", action.payload);
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
        // errors: Object.keys(action.payload).map(
        //   key => `${key}: ${action.payload[key]}`
        // )
      };
    default:
      return state;
  }
};

export default reducer;
