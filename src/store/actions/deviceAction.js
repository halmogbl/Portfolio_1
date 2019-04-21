import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const addDevice = device => {
  return async dispatch => {
    try {
      const res = await instance.post(`device/create/`, device);
      const newdevice = res.data;
      console.log(newdevice);
      dispatch({
        type: actionTypes.ADD_DEVICE,
        payload: newdevice
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchDevices = () => {
  return async dispatch => {
    const token = await localStorage.getItem("token");
    try {
      const res = await instance.get("device/list/", {
        headers: { Authorization: `JWT ${token}` }
      });
      const devices = res.data;
      console.log("2");
      dispatch({
        type: actionTypes.FETCH_DEVICES,
        payload: devices
      });
    } catch (err) {
      console.error("Error while fetching devices", err);
    }
  };
};
