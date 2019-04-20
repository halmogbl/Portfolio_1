import * as actionTypes from "../actions/actionTypes";

const initialState = {
  username: null
};

const transferOwnershipReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRANSFER_OWNERSHIP:
      return {
        ...state,
        ownership: action.payload
      };
    default:
      return state;
  }
};

export default transferOwnershipReducer;
