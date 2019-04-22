import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import HistoryList from "./HistoryList";
class History extends Component {
  async componentDidMount() {
    await this.props.fetchHistory();
  }

  render() {
    const historylist = this.props.history;

    const History = historylist.map(history => (
      <HistoryList key={`${history.modified}`} history={history} />
    ));
    return <div className="col-12">{History}</div>;
  }
}

const mapStateToProps = state => ({
  history: state.historyReducer.history
});

const mapDispatchToProps = dispatch => ({
  fetchHistory: () => dispatch(actionCreators.fetchHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
