import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setLoading } from "./deviceAction";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const transferOwnership = (user, device_id, history) => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const res = await instance.put(`device/${device_id}/update/`, user);
      const ownership = res.data;
      history.push("/home");
      dispatch({
        type: actionTypes.TRANSFER_OWNERSHIP,
        payload: ownership
      });
    } catch (error) {
      dispatch(setLoading(false));
      console.error(error);
    }
  };
};
