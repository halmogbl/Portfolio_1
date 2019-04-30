import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";
import { withRouter } from "react-router-dom";
import Loading from "../Loading";

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
    console.log("history comp", this.props.history);
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
        {this.props.loading ? (
          <Loading />
        ) : (
          <div id="content-wrapper">
            <div className="container-fluid col-11" style={{ marginLeft: 40 }}>
              <div className="card mb-3">
                <div
                  className="card-header"
                  style={{
                    backgroundColor: "#0d6675",
                    color: "#fff"
                  }}
                >
                  <i className="fas fa-table" />
                  Transfare Ownership
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div>
                      {!!this.props.errors.length && (
                        <div className="alert alert-danger" role="alert">
                          {this.props.errors.map(error => (
                            <li key={error}>{error}</li>
                          ))}
                        </div>
                      )}
                      <form>
                        <label
                          className="col-form-label"
                          style={{ marginRight: 10 }}
                        >
                          NEW OWNER
                        </label>
                        <input
                          className="col-4 form-control"
                          onChange={this.handleChange}
                        />
                        <button
                          className=" col-2 btn btn-success"
                          style={{ marginLeft: 10 }}
                          onClick={this.handleSubmit}
                        >
                          Transfare
                        </button>
                      </form>
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
const mapStateToProps = state => ({
  loading: state.deviceReducer.loading,
  errors: state.errorReducer.errors
});
const mapDispatchToProps = dispatch => {
  return {
    transferOwnership: (user, deviceID, history) =>
      dispatch(actionCreators.transferOwnership(user, deviceID, history))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Transfare)
);
