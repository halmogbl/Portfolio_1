import React, { Component } from "react";
import NavList from "./NavList";
import Navbar from "./Navbar";

class Navigation extends Component {
  render() {
    return (
      <>
        <NavList />
        <Navbar />
      </>
    );
  }
}

export default Navigation;
