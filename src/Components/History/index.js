import React, { Component } from "react";

class History extends Component {
  render() {
    const history = this.props.history;
    return <ul>{history.iemi_id}</ul>;
  }
}

export default History;
