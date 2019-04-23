import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";
import { NavLink } from "react-router-dom";

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
              <div className="card-header">
                <i className="fas fa-table" />
                Devices
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div>
                    {this.state.device && this.state.device.is_alerted ? (
                      <button onClick={this.handleAlertFalse}>
                        Remove Alert
                      </button>
                    ) : (
                      <>
                        <NavLink
                          to={`/home/device/${
                            this.props.match.params.device_id
                          }/transfare`}
                        >
                          Transfare
                        </NavLink>
                        <button onClick={this.handleAlertTrue}>Alert</button>
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
