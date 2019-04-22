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
      console.log("2111");
      dispatch({
        type: actionTypes.FETCH_DEVICES,
        payload: devices
      });
    } catch (err) {
      console.error("Error while fetching devices", err);
    }
  };
};
export const fetchAlertDevices = iemi_id => {
  console.log("Actions iemi", iemi_id);

  return async dispatch => {
    try {
      const res = await instance.get(`alert/list/?search=${iemi_id}`);
      const alert = res.data;
      console.log("Actions alert after editing ", alert);
      dispatch({
        type: actionTypes.FETCH_ALERT_DEVICES,
        payload: alert
      });
    } catch (err) {
      console.error("Error while fetching Alert devices", err);
    }
  };
};
