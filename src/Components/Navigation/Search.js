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
                    <div>
                      <h3>Search in Alerted Devices </h3>
                      <div>
                        <input
                          type="text"
                          onChange={this.handleChange}
                          placeholder="type IEMI here"
                          className="form-control col-4"
                        />
                        <button
                          onClick={() => this.handleSubmit()}
                          className="btn btn-info"
                        >
                          {" "}
                          Search
                        </button>
                      </div>
                      {this.props.alert && (
                        <div>
                          {" "}
                          this device is marked as{" "}
                          <span className="text-danger">Alerted :</span>{" "}
                        </div>
                      )}
                      {!this.props.notfound ? (
                        <div className=" text-success"> Safe </div>
                      ) : (
                        <div />
                      )}
                    </div>
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

const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices,
    alert: state.deviceReducer.alert,
    notfound: state.deviceReducer.notfound
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
