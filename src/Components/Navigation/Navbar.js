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
      <div className="col-12 navbar navbar-expand navbar-dark bg-dark static-top linerBackgroundNav">
        <Link className="navbar-brand  col-3 text-left" to={`/home`}>
          SEKIAL
        </Link>
        <button
          onClick={() => this.props.logout(this.props.history)}
          className="btn  col-9 text-right"
        >
          <FontAwesomeIcon
            style={{ fontSize: 25, color: "#fff" }}
            icon={faSignOutAlt}
          />
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
