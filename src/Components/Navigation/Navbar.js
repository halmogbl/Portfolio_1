import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
class Navbar extends Component {
  render() {
    return this.props.user ? (
      <div className="col-10 navbar navbar-expand navbar-dark bg-dark static-top linerBackgroundNav">
        <button
          onClick={() => this.props.logout(this.props.history)}
          className="btn  col-12 text-right"
        >
          <FontAwesomeIcon
            style={{ fontSize: 17, color: "#fff" }}
            icon={faSignOutAlt}
          />
          <span style={{ color: "#fff", padding: 10 }}>Logout</span>
        </button>
      </div>
    ) : (
      <></>
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
  )(Navbar)
);
