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
                        Transfare Ownership
                      </button>
                    </form>
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
