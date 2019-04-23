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
  console.log("Actions iemi", iemi_id);

  return async dispatch => {
    try {
      const res = await instance.get(`alert/list/?search=${iemi_id}`);
      const alert = res.data;
      console.log("Actions alert after editing ", alert);
      if (alert.length !== 0) {
        dispatch(infoBack(alert));
      } else {
        console.log("cant send empty");
        await dispatch(notFound());
      }
      dispatch({
        type: actionTypes.FETCH_ALERT_DEVICES,
        payload: alert
      });
    } catch (err) {
      console.error("Error while fetching Alert devices", err);
    }
  };
};

export const infoBack = user => {
  console.log("infoback", user);
  return async dispatch => {
    try {
      let userObj = {
        email: user[0].user.email,
        phone_number: user[0].user.phone_number,
        iemi_id: user[0].iemi_id
      };
      const res = await instance.post(`alert/mail/create/`, userObj);
      const info = res.data;
      dispatch({
        type: actionTypes.FETCH_INFO_BACK,
        payload: info
      });
    } catch (err) {
      console.error("Error while fetching Alert devices", err);
    }
  };
};

export const notFound = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.NOTINDATA,
      payload: false
    });
  };
};
