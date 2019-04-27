import * as actionTypes from "./actionTypes";

export const setErrors = errors => ({
  type: actionTypes.SET_ERRORS,
  payload: errors
});
export const resetError = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.RESET_ERROR,
      payload: []
    });
  };
};

export const reset = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.RESET,
      payload: ""
    });
  };
};
