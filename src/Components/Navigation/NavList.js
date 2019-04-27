import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
class NavList extends Component {
  render() {
    return (
      <>
        {this.props.user && (
          <div
            style={{ padding: 0 }}
            className="sidebar col-2 linerBackgroundSidebar"
          >
            <Link
              style={{ marginLeft: 50, marginTop: 10, marginBottom: 10 }}
              className="navbar-brand  col-3 text-left"
              to={`/home`}
            >
              <img src={logo} width="60" />
            </Link>
            <NavLink
              style={{
                color: "#fff",
                padding: 20,
                borderBottom: "1px solid #fff",
                borderTop: "1px solid #fff"
              }}
              className="col-12 hoverNav"
              to={`/home`}
            >
              <FontAwesomeIcon
                style={{ fontSize: 17, color: "#fff", marginRight: 20 }}
                icon={faMobileAlt}
              />
              My Devices
            </NavLink>
            <NavLink
              className="col-12 hoverNav"
              style={{
                color: "#fff",
                padding: 20,
                borderBottom: "1px solid #fff"
              }}
              to={`/add`}
            >
              <FontAwesomeIcon
                style={{ fontSize: 17, color: "#fff", marginRight: 20 }}
                icon={faPlus}
              />
              Add Device
            </NavLink>
            <NavLink
              style={{
                color: "#fff",
                padding: 20,
                borderBottom: "1px solid #fff"
              }}
              className="col-12 hoverNav"
              to={`/history`}
            >
              <FontAwesomeIcon
                style={{ fontSize: 17, color: "#fff", marginRight: 20 }}
                icon={faAddressBook}
              />
              History
            </NavLink>
            <NavLink
              style={{
                color: "#fff",
                padding: 20,
                borderBottom: "1px solid #fff"
              }}
              className="col-12 hoverNav"
              to={`/search`}
            >
              <FontAwesomeIcon
                style={{ fontSize: 17, color: "#fff", marginRight: 20 }}
                icon={faSearch}
              />
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
