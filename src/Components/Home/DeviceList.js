import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DeviceList extends Component {
  render() {
    const device = this.props.device;
    return (
      <li>
        <NavLink to={`/home/device/${device.id}`}>{device.iemi_id}</NavLink>
      </li>
    );
  }
}

export default DeviceList;
