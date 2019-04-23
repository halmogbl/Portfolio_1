import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import DeviceList from "./DeviceList";
class Home extends Component {
  async componentDidMount() {
    await this.props.fetchDevices();
  }

  DeviceChange(e) {
    this.setState({ iemi_id: e.target.value });
  }
  ownershipChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const ListDevices = this.props.devices.map(device => (
      <DeviceList key={device.id} device={device} />
    ));

    return (
      // <div>
      //   <ul>{ListDevices}</ul>
      // </div>
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
                      <th>{ListDevices}</th>
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

const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDevices: () => dispatch(actionCreators.fetchDevices())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
