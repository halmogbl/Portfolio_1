import React, { Component } from "react";

import { Input } from "react-input-component";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

import "../../assets/css/Auth.css";

class RegistationForm extends Component {
  state = {
    username: "",
    phone_number: "",
    password: "",
    email: "",
    is_store: true
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    return (
      <div
        style={{ marginTop: "125px" }}
        className="card o-hidden border-0 shadow-lg   col-12"
      >
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image  col-12" />
            <div className="col-lg-7  col-12">
              <div className="p-5">
                <div className="text-center  col-12">
                  <h1 className="h4 text-gray-900 mb-4  col-12">
                    Create Account
                  </h1>
                </div>
                <div className="text-center  col-12">
                  {!!this.props.errors.length && (
                    <div className="text-left alert alert-danger">
                      {this.props.errors.map(error => (
                        <li key={error}>{error}</li>
                      ))}
                    </div>
                  )}
                </div>
                <form onSubmit={this.submitHandler}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.changeHandler}
                        className="form-control form-control-user"
                        placeholder="Commercial ID"
                        required
                      />
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <Input
                        name="phone_number"
                        value={this.state.phone_number}
                        type="tel"
                        onChange={this.changeHandler}
                        className="form-control form-control-user"
                        placeholder="Mobile Ex: 966555555555"
                        required
                        pattern="[0-9]{12}"
                      />
                    </div>
                    <br />
                    <br />

                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        type="password"
                        className="form-control form-control-user"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-0 ">
                      <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        type="email"
                        className="form-control form-control-user"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button
                        style={{ padding: 9, marginTop: 20 }}
                        type="submit"
                        className="btn btn-success col-12 "
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-center">
                  <Link to="/login" className="small">
                    Already have an account? Login
                  </Link>
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
  errors: state.errorReducer.errors
});

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);
