import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Components
import Home from "./Components/Home";

import Navigation from "./Components/Navigation";

import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/RegistrationForm";
// import Transfer from "./Components/Home/Transfer";
import Transfare from "./Components/Home/Transfer";
import DeviceDetails from "./Components/Home/DeviceDetails";

import Search from "./Components/Navigation/Search";

import History from "./Components/History";
import AddDevice from "./Components/Home/AddDevice";
// Actions
import * as actionCreators from "./store/actions";

//CSS
import "./assets/css/GridSystem.css";
import "./assets/css/Custom.css";
// import "./assets/css/animation.css";
import "./assets/css/main.css";
import "./assets/css/main1.css";
import "./assets/css/sb1.css";
import "./assets/css/sb2.css";

class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
  }

  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route
            path="/home/device/:device_id/transfare"
            component={Transfare}
          />
          <Route path="/home/device/:device_id/" component={DeviceDetails} />
          <Route path="/history" component={History} />
          <Route path="/add" component={AddDevice} />
          <Route path="/search" component={Search} />

          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
