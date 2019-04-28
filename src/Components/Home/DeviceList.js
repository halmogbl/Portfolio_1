import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

class DeviceList extends Component {
  render() {
    const device = this.props.device;
    return (
      <>
        {device.is_alerted ? (
          <tr style={{ padding: 0 }} className="col-12">
            <th className="col-12">
              <NavLink
                className="col-12 row"
                to={`/home/device/${device.id}`}
                style={{ color: "#f1c601" }}
              >
                <div style={{ paddingRight: 20, margin: 0 }}>
                  <FontAwesomeIcon
                    style={{ fontSize: 25 }}
                    icon={faMobileAlt}
                  />
                </div>
                <div style={{ padding: 0, margin: 0 }} className="col-10">
                  {device.iemi_id}
                </div>
              </NavLink>
            </th>
          </tr>
        ) : (
          <tr style={{ padding: 0 }} className="col-12">
            <th className="col-12">
              <NavLink
                className="col-12 row"
                to={`/home/device/${device.id}`}
                style={{ color: "#000" }}
              >
                <div style={{ paddingRight: 20, margin: 0 }}>
                  <FontAwesomeIcon
                    style={{ fontSize: 25, color: "#0f7383" }}
                    icon={faMobileAlt}
                  />
                </div>
                <div
                  style={{ padding: 0, margin: 0, color: "#0f7383" }}
                  className="col-10"
                >
                  {device.iemi_id}
                </div>
              </NavLink>
            </th>
          </tr>
        )}
      </>
    );
  }
}

export default DeviceList;
