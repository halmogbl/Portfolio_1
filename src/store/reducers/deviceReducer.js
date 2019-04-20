import * as actionTypes from "../actions/actionTypes";

const initialState = {
  devices: [],
  deviceLoading: true,

  deviceDetail: null,
  deviceDetailLoading: true
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEVICE:
      return {
        ...state,
        devices: action.payload,
        deviceLoading: false
      };

    // case actionTypes.GET_DEVICE_DETAIL:
    //   return {
    //     ...state,
    //     deviceDetail: action.payload,
    //     deviceDetailLoading: false
    //   };
    default:
      return state;
  }
};

export default deviceReducer;
