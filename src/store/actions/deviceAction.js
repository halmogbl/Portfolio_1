import * as actionTypes from "./actionTypes";
import axios from "axios";
import { setErrors, resetError } from "./errors";
import { fetchHistory } from "./history";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const addDevice = (device, history) => {
  return async dispatch => {
    dispatch(resetError());
    dispatch(setLoading(true));

    try {
      const res = await instance.post(`device/create/`, device);
      const newdevice = res.data;
      history.push("/home");
      dispatch({
        type: actionTypes.ADD_DEVICE,
        payload: newdevice
      });
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const fetchDevices = () => {
  return async dispatch => {
    try {
      const res = await instance.get("device/list/");
      const devices = res.data;
      dispatch(fetchHistory());
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
    dispatch(setLoading(true));
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newStatus = res.data;

      console.log("New Status", newStatus);
      dispatch(fetchDevices());
      dispatch(fetchHistory());
      history.push("/home");
    } catch (err) {
      dispatch(setLoading(false));
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const changeAlertStatusFalse = (user, deviceID, history) => {
  return async dispatch => {
    dispatch(setLoading(true));

    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/device/${deviceID}/update/`,
        user
      );

      const newStatus = res.data;
      console.log("New Status", newStatus);
      dispatch(fetchDevices());
      dispatch(fetchHistory());
      history.push("/home");
    } catch (err) {
      dispatch(setLoading(false));
      console.error("Error while changeding Alert Status", err);
    }
  };
};

export const fetchAlertDevices = iemi_id => {
  return async dispatch => {
    dispatch(reset());
    dispatch(resetError());
    dispatch(fetchHistory());
    try {
      dispatch(setLoading(true));
      const res = await instance.get(`alert/${iemi_id}/`);
      const alert = res.data;

      dispatch({
        type: actionTypes.FETCH_ALERT_DEVICES,
        payload: alert
      });
    } catch (err) {
      console.error("Error while fetching Alert devices", err);
      dispatch(setErrors(err.response.data));
      dispatch(setLoading(false));
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

export const setLoading = value => ({
  type: actionTypes.LOADING,
  payload: value
});
