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
      console.log("from add device reducer", action.payload);
      return {
        ...state,
        AddedDevice: action.payload,
        deviceLoading: false
      };
    case actionTypes.FETCH_DEVICES:
      console.log("All My devices from reducer", action.payload);
      return {
        ...state,
        devices: action.payload
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
