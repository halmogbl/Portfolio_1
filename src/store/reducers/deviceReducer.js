import * as actionTypes from "../actions/actionTypes";

const initialState = {
  devices: [],
  AddedDevice: "",
  deviceDetail: null,
  alert: "",
  loading: false
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEVICE:
      return {
        ...state,
        AddedDevice: action.payload,
        loading: false
      };
    case actionTypes.FETCH_DEVICES:
      return {
        ...state,
        devices: action.payload,
        loading: false
      };
    case actionTypes.FETCH_ALERT_DEVICES:
      return {
        ...state,
        alert: action.payload,
        loading: false
      };
    case actionTypes.RESET:
      return {
        ...state,
        alert: action.payload,
        loading: false
      };
    case actionTypes.LOADING:
      console.log("reduc", action.payload);

      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default deviceReducer;
