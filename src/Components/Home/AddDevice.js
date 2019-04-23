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
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>IMEI</th>
                      </tr>
                    </thead>
                    <tr>
                      <div>
                        <input type="text" onChange={this.DeviceChange} />
                        <button
                          onClick={() => this.props.addDevice(this.state)}
                        >
                          add
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

const mapDispatchToProps = dispatch => {
  return {
    addDevice: device => dispatch(actionCreators.addDevice(device))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddDevice);
