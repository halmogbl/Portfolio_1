import { SET_ERRORS, RESET_ERROR, RESET } from "../actions/actionTypes";

const initialState = {
  errors: [],
  reset: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: Object.keys(action.payload).map(
          key => `${key}: ${action.payload[key]}`
        )
      };
    case RESET_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    case RESET:
      return {
        ...state,
        reset: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
