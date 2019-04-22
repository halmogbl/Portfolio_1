import React, { Component } from "react";
import { connect } from "react-redux";

class HistoryList extends Component {
  render() {
    let history = this.props.history;
    return (
      <ul className="col-12">
        <li>iemi number: {history.iemi_id}</li>
        <li>
          status:
          {history.is_alerted ? (
            <span style={{ color: "red" }}>Alerted</span>
          ) : (
            <span style={{ color: "green" }}>Safe</span>
          )}
        </li>
        <li>Created at: {history.created}</li>
        <li>Last Modified :{history.modified}</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryList);
