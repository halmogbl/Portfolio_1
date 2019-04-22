import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";

class DeviceDetails extends Component {
  state = {
    id: null,
    user: "",
    is_alerted: false
  };
  async componentDidMount() {
    await this.setState({ id: this.props.match.params.device_id });
    console.log("id in state", this.state.id);
  }

  handleChange = event => {
    this.setState({ user: event.target.value });
    console.log(this.state);
  };
  handleSubmit = () => {
    this.props.transferOwnership(this.state, this.state.id);
  };

  render() {
    // let deviceID = this.props.match.params.device_id;
    return (
      <div>
        <form>
          <label>NEW OWNER</label>
          <input onChange={this.handleChange} />
        </form>
        <button onClick={this.handleSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    transferOwnership: (user, deviceID) =>
      dispatch(actionCreators.transferOwnership(user, deviceID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeviceDetails);
