import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div
        className="col-12"
        style={{
          color: "#fff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: 0,
          background: "#212529"
        }}
      >
        <nav
          className="navbar navbar-expand navbar-dark bg-dark static-top col-12"
          style={{}}
        >
          <Link className="navbar-brand col-6" to={`/home`}>
            SEKIAL
          </Link>
          {this.props.user ? (
            <div>
              <button
                onClick={() => this.props.logout(this.props.history)}
                className="btn col-2"
              >
                {this.props.user ? <span>Logout</span> : <div />}
              </button>
            </div>
          ) : (
            <>
              <Link
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: 10
                }}
                className="col-2"
                to={`/login`}
              >
                Login
              </Link>

              <Link
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: 10
                }}
                className="col-2"
                to={`/signup`}
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
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
