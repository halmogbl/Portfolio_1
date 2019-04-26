import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setErrors, resetError } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const addDevice = (device, history) => {
  return async dispatch => {
    try {
      const res = await instance.post(`device/create/`, device);
      const newdevice = res.data;
      history.push("/home");
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
    try {
      const res = await instance.get("device/list/");
      const devices = res.data;

      dispatch({
        type: actionTypes.FETCH_DEVICES,
        payload: devices
      });
    } catch (err) {
      console.error("Error while fetching devices", err);
    }
  };
};

export const changeAlertStatusTrue = (user, deviceID, history) => {
  return async dispatch => {
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newStatus = res.data;
      console.log("New Status", newStatus);
      dispatch(fetchDevices());
      history.push("/home");
    } catch (err) {
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const changeAlertStatusFalse = (user, deviceID, history) => {
  return async dispatch => {
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newStatus = res.data;
      console.log("New Status", newStatus);
      dispatch(fetchDevices());
      history.push("/home");
    } catch (err) {
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const fetchAlertDevices = iemi_id => {
  return async dispatch => {
    dispatch(reset());
    dispatch(resetError());

    try {
      const res = await instance.get(`alert/${iemi_id}/`);
      const alert = res.data;

      dispatch({
        type: actionTypes.FETCH_ALERT_DEVICES,
        payload: alert
      });
    } catch (err) {
      console.error("Error while fetching Alert devices", err);
      dispatch(setErrors(err.response.data));
    }
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
