import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
class AddDevice extends Component {
  state = {
    iemi_id: null,
    username: null
  };

  DeviceChange = e => {
    this.setState({ iemi_id: e.target.value });
  };
  ownershipChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.DeviceChange} />
        <button onClick={() => this.props.addDevice(this.state)}>add</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDevice: device => dispatch(actionCreators.addDevice(device))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddDevice);
