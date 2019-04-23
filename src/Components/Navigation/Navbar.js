import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
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
          className="navbar navbar-expand navbar-dark bg-dark static-top"
          style={{}}
        >
          <Link className="navbar-brand" to={`/home`}>
            SEKIAL
          </Link>
        </nav>
      </div>
    );
  }
}
