import * as actionTypes from "../actions/actionTypes";

const initialState = {
  devices: [],
  deviceLoading: true,
  AddedDevice: "",
  deviceDetail: null,
  deviceDetailLoading: true,
  alert: []
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

    case actionTypes.FETCH_ALERT_DEVICES:
      return {
        ...state,
        alert: action.payload
      };
    case actionTypes.RESET:
      return {
        ...state,
        alert: action.payload
      };
    default:
      return state;
  }
};

export default deviceReducer;
