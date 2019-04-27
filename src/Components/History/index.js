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
    return (
      <div
        className="col-10"
        style={{
          // color: "#fff",
          position: "fixed",
          top: 80,
          left: 240,
          right: 0,
          padding: 0
        }}
      >
        <div id="content-wrapper">
          <div className="container-fluid col-11" style={{ marginLeft: 40 }}>
            <div className="card mb-3">
              <div
                className="card-header"
                style={{ backgroundColor: "#0d6675", color: "#fff" }}
              >
                <i className="fas fa-table" />
                History
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                  >
                    <div
                      style={{
                        overflow: "scroll",
                        height: "500px",
                        marginBottom: 10,
                        padding: 0
                      }}
                    >
                      {History}
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
