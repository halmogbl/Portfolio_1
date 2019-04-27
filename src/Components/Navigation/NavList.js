import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";

class NavList extends Component {
  render() {
    return (
      <>
        {this.props.user && (
          <div
            className="col-12"
            style={{
              color: "#fff",
              position: "fixed",
              top: 56,
              left: 0,
              right: 0,
              padding: 0
            }}
          >
            <div
              className="sidebar navbar-nav col-12"
              style={{ margin: 0, padding: 0 }}
            >
              <li
                className="nav-item active col-12"
                style={{ margin: 0, padding: 0 }}
              >
                <NavLink
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: 10
                  }}
                  className="col-12"
                  to={`/home`}
                >
                  My Devices
                </NavLink>
              </li>
              <li className="nav-item col-12" style={{ margin: 0, padding: 0 }}>
                <NavLink
                  className="col-12"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: 10
                  }}
                  to={`/add`}
                >
                  Add Device
                </NavLink>
              </li>
              <li className="nav-item col-12" style={{ margin: 0, padding: 0 }}>
                <NavLink
                  style={{
                    color: "#fff",
                    textDecoration: "none col-12",
                    padding: 10
                  }}
                  className="col-12"
                  to={`/history`}
                >
                  History
                </NavLink>
              </li>
              <li className="nav-item col-12" style={{ margin: 0, padding: 0 }}>
                <NavLink
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: 10
                  }}
                  className="col-12 "
                  to={`/search`}
                >
                  Search
                </NavLink>
              </li>
            </div>
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
