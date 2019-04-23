import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DeviceList extends Component {
  render() {
    const device = this.props.device;
    return (
      <>
        {device.is_alerted ? (
          <tr style={{ padding: 0 }} className="col-12">
            <th className="col-12" style={{ background: "#FFD07E" }}>
              <NavLink
                className="col-12"
                to={`/home/device/${device.id}`}
                style={{ color: "#000" }}
              >
                {device.iemi_id}
              </NavLink>
            </th>
          </tr>
        ) : (
          <tr style={{ padding: 0 }} className="col-12">
            <th className="col-12">
              <NavLink
                className="col-12"
                to={`/home/device/${device.id}`}
                style={{ color: "#000" }}
              >
                {device.iemi_id}
              </NavLink>
            </th>
          </tr>
        )}
      </>
    );
  }
}

export default DeviceList;
