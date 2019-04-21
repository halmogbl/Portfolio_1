import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DeviceList extends Component {
  render() {
    const device = this.props.device;
    return (
      <ul>
        <NavLink to={`/home/${device.id}/`}>{device.iemi_id}</NavLink>
      </ul>
    );
  }
}

export default DeviceList;
