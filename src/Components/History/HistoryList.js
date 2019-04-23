import React, { Component } from "react";
import { connect } from "react-redux";

class HistoryList extends Component {
  render() {
    let history = this.props.history;
    return (
      <>
        <tr className="col-12" style={{ padding: 0, background: "#e7e7e7" }}>
          <th className="col-12">iemi: {history.iemi_id}</th>
        </tr>
        <tr className="col-12" style={{ padding: 0 }}>
          <th className="col-4">
            <span>Created: {history.created.substring(0, 10)} |</span>
            <span> {history.created.substring(11, 19)}</span>
          </th>
          <th className="col-4">
            <span> Last Modified : {history.modified.substring(0, 10)} |</span>
            <span> {history.modified.substring(11, 19)}</span>
          </th>
          <th className="col-4">
            status:
            {history.is_alerted ? (
              <span style={{ color: "red" }}>Alerted</span>
            ) : (
              <span style={{ color: "green" }}>Safe</span>
            )}
          </th>
        </tr>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryList);
