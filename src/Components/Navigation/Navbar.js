import React, { Component } from "react";

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
          padding: 0
        }}
      >
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand">SEKEAL</a>
        </nav>
      </div>
    );
  }
}
