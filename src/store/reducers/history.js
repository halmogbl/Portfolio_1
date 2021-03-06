import * as actionTypes from "../actions/actionTypes";

const initialState = {
  history: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HISTORY:
      return {
        ...state,
        history: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
