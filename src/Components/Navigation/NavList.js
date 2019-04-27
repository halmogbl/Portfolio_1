import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";

class NavList extends Component {
  render() {
    return (
      <>
        {this.props.user && (
          <div className="sidebar col-2">
            <NavLink
              style={{
                color: "#fff",
                padding: 20
              }}
              className="col-12 "
              to={`/home`}
            >
              My Devices
            </NavLink>
            <NavLink
              className="col-12"
              style={{
                color: "#fff",
                padding: 20
              }}
              to={`/add`}
            >
              Add Device
            </NavLink>
            <NavLink
              style={{
                color: "#fff",
                padding: 20
              }}
              className="col-12"
              to={`/history`}
            >
              History
            </NavLink>
            <NavLink
              style={{
                color: "#fff",
                padding: 20
              }}
              className="col-12 "
              to={`/search`}
            >
              Search
            </NavLink>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => ({
  logout: history => dispatch(actionCreators.logout(history))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavList)
);
