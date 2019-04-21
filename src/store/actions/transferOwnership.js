import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const transferOwnership = (user, device_id) => {
  console.log(`device id is: ${device_id} and user object is: ${user}`);
  return async dispatch => {
    const token = localStorage.getItem("token");
    console.log(`TOKEN: ${token}`);

    try {
      const res = await instance.put(`device/${device_id}/update/`, user, {
        headers: { Authorization: `JWT ${token}` }
      });
      const ownership = res.data;
      console.log(`new owner: ${ownership}`);

      dispatch({
        type: actionTypes.TRANSFER_OWNERSHIP,
        payload: ownership
      });
    } catch (error) {
      console.error(error);
    }
  };
};
