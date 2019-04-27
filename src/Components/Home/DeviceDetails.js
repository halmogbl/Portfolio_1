import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class DeviceDetails extends Component {
  state = {
    id: null,
    user: "",
    is_alerted: null
  };
  async componentDidMount() {
    await this.setState({
      id: this.props.match.params.device_id,
      user: this.props.user.username
    });
    await this.props.fetchDevices();
    const device = this.props.devices.find(
      device => device.id === +this.state.id
    );
    await this.setState({
      device: device
    });
  }

  handleChange = event => {
    this.setState({ user: event.target.value });
  };
  handleAlertTrue = async () => {
    await this.setState({ is_alerted: true });
    this.props.changeAlertStatusTrue(
      this.state,
      this.state.id,
      this.props.history
    );
  };
  handleAlertFalse = async () => {
    await this.setState({ is_alerted: false });
    this.props.changeAlertStatusFalse(
      this.state,
      this.state.id,
      this.props.history
    );
  };

  render() {
    return (
      <div
        className="col-10"
        style={{
          // color: "#fff",
          position: "fixed",
          top: 80,
          left: 240,
          right: 0,
          padding: 0
        }}
      >
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="card mb-3">
              <div
                className="card-header col-12"
                style={{ backgroundColor: "#0d6675", color: "#fff" }}
              >
                <div style={{ paddingRight: 20 }} className="col-9">
                  <span className="col-6">
                    <FontAwesomeIcon
                      style={{ fontSize: 25, marginRight: 20 }}
                      icon={faMobileAlt}
                    />
                    {this.state.device && this.state.device.iemi_id}
                  </span>
                </div>

                {this.state.device && this.state.device.is_alerted ? (
                  <div />
                ) : (
                  <div className="col-3">
                    <NavLink
                      className="btn btn-success col-12"
                      to={`/home/device/${
                        this.props.match.params.device_id
                      }/transfare`}
                    >
                      <span style={{ paddingRight: 20 }}>
                        {" "}
                        Transfare Ownership
                      </span>
                      <FontAwesomeIcon
                        style={{ fontSize: 15 }}
                        icon={faArrowRight}
                      />

                      <span />
                    </NavLink>
                  </div>
                )}
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div>
                    {this.state.device && this.state.device.is_alerted ? (
                      <p style={{ marginTop: 10, marginRight: 10 }}>
                        Your device in alerted list!
                        <p>
                          Press the button
                          <span
                            style={{
                              fontWeight: "500",
                              fontSize: 16
                            }}
                          >
                            {" "}
                            Remove Alert{" "}
                          </span>
                          to remove the device from the alerted devices
                          <span>
                            <button
                              className="btn btn-warning"
                              style={{ color: "#000", marginLeft: 10 }}
                              onClick={this.handleAlertFalse}
                            >
                              Remove Alert
                            </button>
                          </span>
                        </p>
                      </p>
                    ) : (
                      <>
                        <p style={{ marginTop: 10 }}>
                          Did you lost your device?
                          <p>
                            Press the button
                            <span
                              style={{
                                fontWeight: "500",
                                fontSize: 16
                              }}
                            >
                              {" "}
                              Lost The Device
                            </span>
                            to add the device to the alerted devices
                            <span>
                              <button
                                style={{ marginLeft: 10 }}
                                className="btn btn-danger"
                                onClick={this.handleAlertTrue}
                              >
                                Lost The Device
                              </button>
                            </span>
                          </p>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  devices: state.deviceReducer.devices
});
const mapDispatchToProps = dispatch => {
  return {
    changeAlertStatusTrue: (user, deviceID, history) =>
      dispatch(actionCreators.changeAlertStatusTrue(user, deviceID, history)),
    changeAlertStatusFalse: (user, deviceID, history) =>
      dispatch(actionCreators.changeAlertStatusFalse(user, deviceID, history)),
    fetchDevices: () => dispatch(actionCreators.fetchDevices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceDetails);
