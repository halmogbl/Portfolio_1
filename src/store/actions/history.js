import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const fetchHistory = () => {
  return async dispatch => {
    const token = await localStorage.getItem("token");
    try {
      let response = await instance.get("history/", {
        headers: { Authorization: `JWT ${token}` }
      });
      let history = response.data;

      dispatch({
        type: actionTypes.FETCH_HISTORY,
        payload: history
      });
    } catch (error) {
      console.error("Error while fetching history", error);
    }
  };
};
