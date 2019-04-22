import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import DeviceList from "./DeviceList";
class Home extends Component {
  async componentDidMount() {
    await this.props.fetchDevices();
  }

  DeviceChange(e) {
    this.setState({ iemi_id: e.target.value });
  }
  ownershipChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const ListDevices = this.props.devices.map(device => (
      <DeviceList key={device.id} device={device} />
    ));

    return (
      <div>
        <ul>{ListDevices}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDevices: () => dispatch(actionCreators.fetchDevices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
