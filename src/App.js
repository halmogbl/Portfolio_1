import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Components
import Home from "./Components/Home";
import NavBar from "./Components/Navigation";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/RegistrationForm";
// import Transfer from "./Components/Home/Transfer";
import DeviceDetails from "./Components/Home/DeviceDetails";

// Actions
import * as actionCreators from "./store/actions";

//CSS
import "./assets/css/GridSystem.css";
import "./assets/css/Custom.css";
import "./assets/css/animation.css";

class App extends Component {
  async componentDidMount() {
    await this.props.checkForExpiredToken();
  }

  render() {
    return (
      <div className="content-wrapper col-12" style={{}}>
        <NavBar />
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          {/* <Route path="/home/transfer" component={Transfer} /> */}
          <Route path="/home/:device_id/" component={DeviceDetails} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
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
