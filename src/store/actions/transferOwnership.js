import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setLoading } from "./deviceAction";
import { setErrors, resetError } from "./errors";
import { fetchHistory } from "./history";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const transferOwnership = (user, device_id, history) => {
  console.log("history action", history);
  return async dispatch => {
    dispatch(resetError());
    dispatch(fetchHistory());
    try {
      dispatch(setLoading(true));
      const res = await instance.put(`device/${device_id}/update/`, user);
      const ownership = res.data;
      history.push("/home");
      dispatch({
        type: actionTypes.TRANSFER_OWNERSHIP,
        payload: ownership
      });
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setErrors(error.response.data));
      console.error(error);
    }
  };
};
