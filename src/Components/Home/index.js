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
    console.log(this.props.devices);
    console.log("from home", this.props.user);
    return (
      <>
        {this.props.user ? (
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
            <div id="content-wrapper col-12">
              <div className="container-fluid">
                <div className="card mb-3">
                  <div className="card-header col-12">
                    <i className="fas fa-table" />
                    My Devices
                  </div>
                  <div className="card-body col-12">
                    <div className="table-responsive col-12">
                      <table
                        className="table table-bordered col-12"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th>IMEI</th>
                          </tr>
                        </thead>
                        <div>{ListDevices}</div>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          this.props.history.push("/login")
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    devices: state.deviceReducer.devices,
    user: state.auth.user
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
