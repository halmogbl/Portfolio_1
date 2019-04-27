import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

class HistoryList extends Component {
  render() {
    let history = this.props.history;
    return (
      <>
        <tr className="col-12" style={{ padding: 0, background: "#e7e7e7" }}>
          <th className="col-12 row" style={{ marginLeft: 10 }}>
            <div style={{ paddingRight: 20, margin: 0 }}>
              <FontAwesomeIcon
                style={{ fontSize: 25, color: "#000" }}
                icon={faMobileAlt}
              />
            </div>
            <span style={{ color: "#000" }}>{history.iemi_id}</span>
          </th>
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
