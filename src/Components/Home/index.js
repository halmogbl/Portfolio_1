import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import DeviceDetails from "./DeviceDetails";
import DeviceList from "./DeviceList";
class Home extends Component {
  state = {
    iemi_id: null,
    username: null
  };
  // ComponentDidMount() {
  //   this.props.fetchDevices();
  // }
  async componentDidMount() {
    // console.log("component is loading");
    await this.props.fetchDevices();
    // console.log("the devices from comp", );
  }

  DeviceChange(e) {
    this.setState({ iemi_id: e.target.value });
  }
  ownershipChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    // const adding = async () => {
    //   await this.props.addDevice(this.state);
    // };
    // const transfer = async () => {
    //   await this.props.transferOwnership(this.state);
    // };
    // const showDevices = this.props.devices.map(device => (
    //   <DeviceDetails key={device.id} device={device} />
    // ));
    const ListDevices = this.props.devices.map(device => (
      <DeviceList key={device.id} device={device} />
    ));

    return (
      <div>
        helllo
        <input type="text" onChange={this.DeviceChange.bind(this)} />
        <button onClick={() => this.props.addDevice(this.state)}>add</button>
        hh
        {/* <div> {showDevices}</div> */}
        {ListDevices}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices
    //deviceDetail : state.deviceReducer.deviceDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addDevice: device => dispatch(actionCreators.addDevice(device)),
    transferOwnership: username =>
      dispatch(actionCreators.transferOwnership(username)),
    fetchDevices: () => dispatch(actionCreators.fetchDevices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
