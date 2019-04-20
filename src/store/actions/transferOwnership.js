import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const transferOwnership = username => {
  return async dispatch => {
    try {
      const res = await instance.put(`decive/update/${username}/`);
      const ownership = res.data;
      dispatch({
        type: actionTypes.TRANSFER_OWNERSHIP,
        payload: ownership
      });
    } catch (error) {
      console.error(error);
    }
  };
};
