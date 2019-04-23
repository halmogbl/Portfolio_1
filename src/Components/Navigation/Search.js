import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Search extends Component {
  state = {
    iemi_id: ""
  };

  handleChange = event => {
    this.setState({ iemi_id: event.target.value });
    console.log(this.state);
  };

  handleSubmit() {
    this.props.fetchAlertDevices(this.state.iemi_id);
    console.log(" search comp iemi", this.state.iemi_id);
  }
  render() {
    return (
      <div>
        <div>
          <h3>Sekail - Alert devices search</h3>
          <div>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="type IEMI here"
            />
            <button onClick={() => this.handleSubmit()}> Search</button>
          </div>
          {this.props.alert && <div> this device is Alerted :</div>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices,
    alert: state.deviceReducer.alert
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAlertDevices: iemi_id =>
      dispatch(actionCreators.fetchAlertDevices(iemi_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
