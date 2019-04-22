import * as actionTypes from "../actions/actionTypes";

const initialState = {
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HISTORY:
      console.log("history from reducer", action.payload);
      return {
        ...state,
        history: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
