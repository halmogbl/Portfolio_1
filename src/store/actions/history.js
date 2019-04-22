import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const fetchHistory = () => {
  return async dispatch => {
    try {
      let response = await instance.get("history/");
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
