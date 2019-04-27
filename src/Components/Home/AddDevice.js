import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
class AddDevice extends Component {
  state = {
    iemi_id: null,
    username: null
  };
  componentWillUnmount() {
    this.props.errors.length && this.props.resetError();
  }
  DeviceChange = e => {
    this.setState({ iemi_id: e.target.value });
  };
  ownershipChange = e => {
    this.setState({ username: e.target.value });
  };

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
          <div className="container-fluid col-12">
            <div className="card mb-3 ">
              <div className="card-header col-12">
                <i className="fas fa-table" />
                Add New Device
              </div>
              <div className="card-body  col-12">
                <div className="table-responsive  col-12">
                  <table
                    className="table table-bordered "
                    id="dataTable"
                    width="100%"
                  >
                    <thead>
                      {!!this.props.errors.length && (
                        <div className="alert alert-danger" role="alert">
                          {this.props.errors.map(error => (
                            <li key={error}>{error}</li>
                          ))}
                        </div>
                      )}
                      <tr>
                        <th>NEW IMEI</th>
                      </tr>
                    </thead>
                    <tr>
                      <div>
                        <input type="text" onChange={this.DeviceChange} />
                        <button
                          className="btn btn-success"
                          style={{
                            padding: 10,
                            margin: 10,
                            background: "#green"
                          }}
                          onClick={() =>
                            this.props.addDevice(this.state, this.props.history)
                          }
                        >
                          Add
                        </button>
                      </div>
                    </tr>
                  </table>
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
  errors: state.errorReducer.errors
});

const mapDispatchToProps = dispatch => {
  return {
    addDevice: (device, history) =>
      dispatch(actionCreators.addDevice(device, history)),
    resetError: () => dispatch(actionCreators.resetError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDevice);
