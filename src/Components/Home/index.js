import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Home extends Component {
  state = {
    iemi_id: null,
    username: null
  };
  componentDidMount = () => {};

  DeviceChange(e) {
    this.setState({ iemi_id: e.target.value });
  }
  ownershipChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const adding = async () => {
      await this.props.addDevice(this.state);
    };
    const transfer = async () => {
      await this.props.transferOwnership(this.state);
    };

    return (
      <div>
        <input type="text" onChange={this.DeviceChange.bind(this)} />
        <button onClick={() => this.props.addDevice(this.state)}>add</button>

        <div>
          {/* change ownerShip */}
          username
          <input type="text" onChange={this.ownershipChange.bind(this)} />
          IEMI
          <input type="text" onChange={this.ownershipChange.bind(this)} />
          <button onClick={() => this.props.transferOwnership(this.state)}>
            Transfer Ownership
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    device: state.deviceReducer.devices
    //deviceDetail : state.deviceReducer.deviceDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addDevice: device => dispatch(actionCreators.addDevice(device)),
    transferOwnership: username =>
      dispatch(actionCreators.transferOwnership(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
