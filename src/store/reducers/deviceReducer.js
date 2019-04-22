import * as actionTypes from "../actions/actionTypes";

const initialState = {
  devices: [],
  deviceLoading: true,
  AddedDevice: "",
  deviceDetail: null,
  deviceDetailLoading: true
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEVICE:
      return {
        ...state,
        AddedDevice: action.payload,
        deviceLoading: false
      };
    case actionTypes.FETCH_DEVICES:
      return {
        ...state,
        devices: action.payload
      };
    default:
      return state;
  }
};

export default deviceReducer;
