import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Search extends Component {
  state = {
    iemi_id: ""
  };

  handleChange = event => {
    this.setState({ iemi_id: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.props.fetchAlertDevices(this.state.iemi_id);
  }
  render() {
    return (
      <div
        className="col-10"
        style={{
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

                      {this.props.alert && this.props.alert.is_alerted ? (
                        <div>
                          {" "}
                          this device is marked as{" "}
                          <span className="text-danger">Alerted </span>{" "}
                        </div>
                      ) : (
                        this.props.alert.is_alerted === false && (
                          <div>
                            {" "}
                            this device is marked as{" "}
                            <span className="text-info">Safe </span>{" "}
                          </div>
                        )
                      )}

                      {this.props.errors && (
                        <div>
                          <span className="text-warning">
                            {this.props.errors[0]}
                          </span>
                        </div>
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
    notfound: state.deviceReducer.notfound,
    errors: state.errorReducer.errors
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
