import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";

class Transfare extends Component {
  state = {
    id: null,
    user: "",
    is_alerted: false
  };
  async componentDidMount() {
    await this.setState({ id: this.props.match.params.device_id });
  }

  handleChange = event => {
    this.setState({ user: event.target.value });
  };
  handleSubmit = () => {
    this.props.transferOwnership(this.state, this.state.id, this.props.history);
  };

  render() {
    return (
      <div>
        <form>
          <label>NEW OWNER</label>
          <input onChange={this.handleChange} />
        </form>
        <button onClick={this.handleSubmit}>Transfare Ownership</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    transferOwnership: (user, deviceID, history) =>
      dispatch(actionCreators.transferOwnership(user, deviceID, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Transfare);
