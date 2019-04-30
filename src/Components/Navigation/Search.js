import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Loading from "../Loading";

class Search extends Component {
  state = {
    iemi_id: ""
  };
  componentWillUnmount() {
    this.props.errors.length && this.props.resetError();
    this.props.errors && this.props.reset();
  }

  handleChange = event => {
    this.setState({ iemi_id: event.target.value });
  };

  handleSubmit() {
    this.props.fetchAlertDevices(this.state.iemi_id);
    console.log(this.props.loading);
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
        {this.props.loading ? (
          <Loading />
        ) : (
          <div id="content-wrapper">
            <div className="container-fluid col-11" style={{ marginLeft: 40 }}>
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#0d6675", color: "#fff" }}
                >
                  <i className="fas fa-table" />
                  Search in Alerted Devices
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div>
                      <div>
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
                            style={{
                              backgroundColor: "#0d6675",
                              marginLeft: 10
                            }}
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alert: state.deviceReducer.alert,
    errors: state.errorReducer.errors,
    loading: state.deviceReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAlertDevices: iemi_id =>
      dispatch(actionCreators.fetchAlertDevices(iemi_id)),
    resetError: () => dispatch(actionCreators.resetError()),
    reset: () => dispatch(actionCreators.reset())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
